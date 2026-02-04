import nodemailer from "nodemailer";

const sendMail = async (name, email, message) => {
  // 1️⃣ transporter banao (email bhejne ka engine)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,      // tumhara gmail
      pass: process.env.EMAIL_PASS // gmail app password
    },
  });

  // 2️⃣ actual mail bhejo
  await transporter.sendMail({
    from: email,                  
    to: process.env.EMAIL,        
    subject: "New Contact Message 📩",
    html: `
      <h2>New Contact Form Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });
};

export default sendMail;
