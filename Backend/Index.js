import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import bookRoutes from "./routes/book.route.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import contactRoutes from "./routes/contact.route.js";


const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(helmet());
app.use(express.json());

// ✅ Only ONE contact route
app.use("/api/contact", contactRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
  );

app.get("/", (req, res) => {
  res.send("BookStore Project!");
});

app.use("/books", bookRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Bookify listening on port ${PORT}`);
});