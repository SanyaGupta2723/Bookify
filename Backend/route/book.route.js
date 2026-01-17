// routes -> book.routes.js
import Book from "../model/model.book.js"; 

import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Book not found" });
  }
});


export default router;
