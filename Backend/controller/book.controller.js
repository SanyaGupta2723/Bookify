import Book from "../model/model.book.js";
import mongoose from "mongoose";

/* ✅ GET ALL BOOKS */
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};

/* ✅ GET SINGLE BOOK BY ID */
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    // safety check
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book id" });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};
