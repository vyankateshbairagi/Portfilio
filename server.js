import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json());

const buildTransport = () => {
  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const smtpPort = Number(process.env.SMTP_PORT || 587);

  return nodemailer.createTransport({
    host,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user,
      pass,
    },
  });
};

const sanitize = (value) => String(value || '').trim();
const isEmpty = (value) => !value || String(value).trim().length === 0;

app.post('/api/contact', async (request, response) => {
  const { name, email, phone, subject, message, company } = request.body || {};

  const cleanName = sanitize(name);
  const cleanEmail = sanitize(email);
  const cleanPhone = sanitize(phone);
  const cleanSubject = sanitize(subject);
  const cleanMessage = sanitize(message);
  const cleanCompany = sanitize(company);

  if (cleanCompany) {
    return response.status(200).json({ message: 'OK' });
  }

  if ([cleanName, cleanEmail, cleanSubject, cleanMessage].some(isEmpty)) {
    return response.status(400).json({ message: 'Missing required fields' });
  }

  const toAddress = process.env.MAIL_TO || process.env.EMAIL_USER;
  const fromAddress = process.env.MAIL_FROM || process.env.EMAIL_USER;
  const fromName = process.env.MAIL_FROM_NAME || 'Portfolio';

  if (!toAddress || !fromAddress) {
    return response.status(500).json({ message: 'Mail configuration missing' });
  }

  const transport = buildTransport();
  const adminSubject = `Portfolio contact: ${cleanSubject}`;
  const adminText = [
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    cleanPhone ? `Phone: ${cleanPhone}` : null,
    `Subject: ${cleanSubject}`,
    '',
    cleanMessage,
  ]
    .filter(Boolean)
    .join('\n');

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">
      <p><strong>Name:</strong> ${cleanName}</p>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      ${cleanPhone ? `<p><strong>Phone:</strong> ${cleanPhone}</p>` : ''}
      <p><strong>Subject:</strong> ${cleanSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${cleanMessage.replaceAll('\n', '<br>')}</p>
    </div>
  `;

  try {
    await transport.sendMail({
      from: `${fromName} <${fromAddress}>`,
      to: toAddress,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
      replyTo: cleanEmail,
    });

    return response.status(200).json({ message: 'Message sent' });
  } catch (error) {
    console.error('Contact form error:', error);
    return response.status(500).json({ message: 'Unable to send message' });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});