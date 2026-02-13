import nodemailer from "nodemailer";

const buildTransport = () => {
  const port = Number(process.env.SMTP_PORT || 587);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const parseBody = (body) => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch (error) {
      console.error('Error parsing body:', error);
      return {};
    }
  }

  return body;
};

const isEmpty = (value) => !value || String(value).trim().length === 0;

const sanitize = (value) => String(value || "").trim();

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Method not allowed" });
  }

  const data = parseBody(request.body);
  const name = sanitize(data.name);
  const email = sanitize(data.email);
  const phone = sanitize(data.phone);
  const subject = sanitize(data.subject);
  const message = sanitize(data.message);
  const company = sanitize(data.company);

  if (company) {
    return response.status(200).json({ message: "OK" });
  }

  if ([name, email, subject, message].some(isEmpty)) {
    return response.status(400).json({ message: "Missing required fields" });
  }

  const transport = buildTransport();
  const toAddress = process.env.MAIL_TO;
  const fromAddress = process.env.MAIL_FROM;
  const fromName = process.env.MAIL_FROM_NAME || "Portfolio";

  if (!toAddress || !fromAddress) {
    return response.status(500).json({ message: "Mail configuration missing" });
  }

  const adminSubject = `Portfolio contact: ${subject}`;
  const adminText = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Subject: ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replaceAll('\n', '<br>')}</p>
    </div>
  `;

  try {
    await transport.sendMail({
      from: `${fromName} <${fromAddress}>`,
      to: toAddress,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
      replyTo: email,
    });

    await transport.sendMail({
      from: `${fromName} <${fromAddress}>`,
      to: email,
      subject: "Thanks for reaching out",
      text: `Hi ${name},\n\nThanks for contacting me. I will reply soon.\n\n- Vyankatesh`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">
          <p>Hi ${name},</p>
          <p>Thanks for contacting me. I will reply soon.</p>
          <p>- Vyankatesh</p>
        </div>
      `,
    });

    return response.status(200).json({ message: "Message sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    return response.status(500).json({ message: "Unable to send message" });
  }
}
