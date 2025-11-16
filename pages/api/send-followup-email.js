import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { email, answers } = req.body;

  await resend.emails.send({
    from: 'EyeGuess Consulting <automation@eyeguess.org>',
    to: email,
    subject: 'Partnership Automation Case Study',
    html: `
      <h2>Case Study: How We Automated $320/month in Partner Payments</h2>
      <p>Based on your interest in partnership automation, here's a real example...</p>
      <a href="https://eyeguess.org/support">See Our Automation Packages</a>
    `
  });

  res.status(200).json({ success: true });
}
