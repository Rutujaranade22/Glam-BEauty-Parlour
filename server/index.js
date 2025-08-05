import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { postSignup } from "./controllers/user.controller.js";

dotenv.config();

const app = express();

// ✅ Middleware to parse JSON body
app.use(cors());
app.use(express.json()); // ← This must be BEFORE routes!

// ✅ Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from server..." });
});

// ✅ Signup route
app.post("/signup", postSignup);

const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
