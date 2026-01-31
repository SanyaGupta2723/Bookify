import express from "express";
import { getBook, getBookById } from "../controller/book.controller.js";

const router = express.Router();

// all books
router.get("/books", getBook);

// single book by id
router.get("/books/:id", getBookById);

export default router;
