const nodemailer = require('nodemailer');
const { z } = require('zod');

const Contact = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional() // honeypot: bots fill this, humans never see it
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });

  const parsed = Contact.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input' });

  // Keys live in Vercel Environment Variables, never in index.html
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO)
    return res.status(500).json({ error: 'Email is not configured' });

  const { name, email, message } = parsed.data;
  try {
    const port = Number(SMTP_PORT) || 465;
    await nodemailer.createTransport({
      host: SMTP_HOST, port, secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    }).sendMail({
      from: SMTP_USER, to: MAIL_TO, replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Could not send message' });
  }
};
