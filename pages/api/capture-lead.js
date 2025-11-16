export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, answers, timestamp, source, questionSet } = req.body;

    // 1. Log to console (for testing)
    console.log('🎯 NEW QUALIFIED LEAD CAPTURED:');
    console.log('Email:', email);
    console.log('Answers:', answers);
    console.log('Question Set:', questionSet);
    console.log('Time:', timestamp);
    console.log('---');

    // 2. Score the lead based on answers
    let leadScore = 0;
    let leadStatus = 'cold';
    
    // Score based on recurring revenue
    if (answers.includes('monthly_subscriptions')) leadScore += 3;
    if (answers.includes('annual_contracts')) leadScore += 2;
    
    // Score based on timeline
    if (answers.includes('immediate_30_days')) leadScore += 3;
    if (answers.includes('1_3_months')) leadScore += 2;
    
    // Score based on budget
    if (answers.includes('budget_15_50k')) leadScore += 3;
    if (answers.includes('budget_50k_plus')) leadScore += 4;
    if (answers.includes('budget_5_15k')) leadScore += 2;
    
    // Determine lead status
    if (leadScore >= 6) leadStatus = 'hot';
    else if (leadScore >= 3) leadStatus = 'warm';

    console.log(`Lead Score: ${leadScore} (${leadStatus})`);

    // TODO: Add your preferred storage method here:
    // - Google Sheets
    // - Airtable  
    // - CRM integration
    // - Email marketing platform

    res.status(200).json({ 
      success: true, 
      message: 'Lead captured successfully',
      leadScore,
      leadStatus
    });

  } catch (error) {
    console.error('Error capturing lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
