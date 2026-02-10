import nodemailer from "nodemailer";

const sendOtpMail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Kitabify" <${process.env.EMAIL}>`,
    to: email,
    subject: "Your Kitabify OTP",
    html: `
      <h2>Kitabify Login OTP</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 5 minutes.</p>
    `,
  });
};

export default sendOtpMail;
