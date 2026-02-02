import express from "express";
import Contact from "../models/contact.model.js";
import sendMail from "../utils/sendMail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body);

    const { name, email, message } = req.body;

    await Contact.create({ name, email, message });

    await sendMail(name, email, message);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ CONTACT API ERROR 👉", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router; // 👈 THIS LINE MUST BE HERE
