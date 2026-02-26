import nodemailer from "nodemailer";

const sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
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