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
    to: process.env.EMAIL, // 👈 tumhari personal mail yaha jayegi
    subject: "New Contact Message - Kitabify",
    html: `
      <h3>New Contact Message</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });
};
console.log("PASS LENGTH:", process.env.EMAIL_PASS?.length);

export default sendMail;