import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, answers, leadScore, leadStatus } = req.body;

    // Determine recommendations based on answers
    let recommendations = [];
    
    if (answers.includes('monthly_subscriptions')) {
      recommendations.push('Stripe Connect for recurring revenue sharing');
    }
    if (answers.includes('immediate_30_days')) {
      recommendations.push('Quick-start implementation package');
    }
    if (answers.includes('budget_15_50k')) {
      recommendations.push('Full partnership OS implementation');
    }

    const emailData = await resend.emails.send({
      from: 'EyeGuess Consulting <automation@eyeguess.org>',
      to: email,
      subject: `Your Partnership Automation Assessment - Score: ${leadScore}/10`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(45deg, #00ff41, #008f39); color: white; padding: 30px; text-align: center; }
                .content { background: #f9f9f9; padding: 30px; }
                .recommendation { background: white; padding: 20px; margin: 15px 0; border-left: 4px solid #00ff41; }
                .cta { background: #00ff41; color: #1a1a1a; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Your Partnership Automation Assessment</h1>
                    <p>Lead Score: ${leadScore}/10 • Status: ${leadStatus.toUpperCase()}</p>
                </div>
                
                <div class="content">
                    <h2>Here's Your Custom Analysis</h2>
                    
                    <p>Based on your assessment, here are our recommendations:</p>
                    
                    ${recommendations.map(rec => `
                        <div class="recommendation">
                            <strong>✓ ${rec}</strong>
                        </div>
                    `).join('')}
                    
                    <h3>Next Steps:</h3>
                    <ul>
                        <li>Schedule a 15-minute strategy call</li>
                        <li>Receive your custom implementation roadmap</li>
                        <li>Get timeline and investment details</li>
                    </ul>
                    
                    <p>
                        <a href="https://calendly.com/your-calendar" class="cta">
                            Schedule Your Strategy Call
                        </a>
                    </p>
                    
                    <p><strong>EyeGuess Consulting</strong><br>
                    Building Digital Legacies Through Partnership Automation</p>
                </div>
            </div>
        </body>
        </html>
      `,
    });

    console.log('✅ Welcome email sent to:', email);
    res.status(200).json({ success: true, emailId: emailData.id });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
