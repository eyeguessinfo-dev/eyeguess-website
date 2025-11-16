import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, answers, timestamp, source, questionSet } = req.body;

    // 1. Score the lead
    let leadScore = 0;
    let leadStatus = 'cold';
    let followUpPriority = 'Low';
    
    // Score based on recurring revenue
    if (answers.includes('monthly_subscriptions')) leadScore += 3;
    if (answers.includes('annual_contracts')) leadScore += 2;
    
    // Score based on timeline
    if (answers.includes('immediate_30_days')) { 
      leadScore += 3;
      followUpPriority = 'URGENT';
    }
    if (answers.includes('1_3_months')) {
      leadScore += 2;
      followUpPriority = 'High';
    }
    
    // Score based on budget
    if (answers.includes('budget_15_50k')) leadScore += 3;
    if (answers.includes('budget_50k_plus')) leadScore += 4;
    if (answers.includes('budget_5_15k')) leadScore += 2;
    
    // Determine lead status
    if (leadScore >= 6) {
      leadStatus = 'hot';
      followUpPriority = 'URGENT';
    } else if (leadScore >= 3) {
      leadStatus = 'warm';
      followUpPriority = 'High';
    }

    console.log('🎯 NEW QUALIFIED LEAD CAPTURED:');
    console.log('Email:', email);
    console.log('Answers:', answers);
    console.log('Lead Score:', leadScore, 'Status:', leadStatus);
    console.log('Priority:', followUpPriority);

    // 2. Save to Google Sheets
    try {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
      
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });

      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      
      await sheet.addRow({
        'Email': email,
        'Answers': JSON.stringify(answers),
        'Lead Score': leadScore,
        'Status': leadStatus,
        'Timestamp': timestamp,
        'Follow Up': followUpPriority,
        'Notes': 'Captured via website questionnaire'
      });

      console.log('✅ Lead saved to Google Sheets');
    } catch (sheetsError) {
      console.error('❌ Google Sheets error:', sheetsError);
      // Don't fail the request if Sheets fails
    }

    // 3. Trigger welcome email (we'll set this up next)
    try {
      await fetch(`${req.headers.origin}/api/send-welcome-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          answers: answers,
          leadScore: leadScore,
          leadStatus: leadStatus
        }),
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Lead captured successfully',
      leadScore,
      leadStatus,
      followUpPriority
    });

  } catch (error) {
    console.error('Error capturing lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
