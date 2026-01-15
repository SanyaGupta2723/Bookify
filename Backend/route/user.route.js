import express from "express";
import protect from "../middleware/auth.middleware.js";
import { getProfile } from "../controller/user.controller.js";

const router = express.Router();

// 🔐 Protected route
router.get("/profile", protect, getProfile);

export default router;
