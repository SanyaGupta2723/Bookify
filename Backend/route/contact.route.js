import express from "express";
import Contact from "../models/contact.model.js";
import sendMail from "../utils/sendMail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to DB
    await Contact.create({ name, email, message });

    // 2️⃣ Send email to YOU
    await sendMail(name, email, message);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
