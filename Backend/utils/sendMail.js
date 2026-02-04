import nodemailer from "nodemailer";

const sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 🔍 verify connection
  await transporter.verify();

  await transporter.sendMail({
    from: `"Kitabify Contact" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: "New Contact - Kitabify",
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });
};

export default sendMail;
