import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/book.route.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import contactRoutes from "./routes/contact.route.js";


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
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/contact", contactRoutes);


// server
app.listen(PORT, () => {
  console.log(`Bookify listening on port ${PORT}`);
});
