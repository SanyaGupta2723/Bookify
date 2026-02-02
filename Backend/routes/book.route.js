import express from "express";
import { getBook, getBookById } from "../controller/book.controller.js";

const router = express.Router();

// ✅ GET ALL BOOKS
router.get("/", getBook);

// ✅ GET SINGLE BOOK
router.get("/:id", getBookById);

export default router;
