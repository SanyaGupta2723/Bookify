import { Resend } from "resend";

const sendMail = async (name, email, message) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL,
    subject: "New Contact Message",
    html: `
      <h3>New Message</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });

  console.log(response);
};

export default sendMail;