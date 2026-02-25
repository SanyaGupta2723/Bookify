const nodemailer = require("nodemailer");

exports.sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New Contact Message - KitaBify",
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    });

    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending email" });
  }
};