import express from "express";
import {
  register,
  login,
  sendOtp,
  verifyOtp,
} from "../controller/auth.controller.js";

const router = express.Router();

// Existing routes
router.post("/register", register);
router.post("/login", login);

// 🔐 OTP routes
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

export default router;
