import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (name, email, message) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
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