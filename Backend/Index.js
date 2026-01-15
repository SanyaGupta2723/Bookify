import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./route/book.route.js";

dotenv.config(); // 👈 sabse upar

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// middlewares
app.use(cors());
app.use(express.json());

// database connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// routes
app.get("/", (req, res) => {
  res.send("BookStore Project!");
});

app.use("/books", bookRoutes);

// server
app.listen(PORT, () => {
  console.log(`Bookify listening on port ${PORT}`);
});
