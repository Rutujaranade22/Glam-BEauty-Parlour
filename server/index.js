import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import { postSignup, postLogin } from "./controllers/user.controller.js";
  dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from server..." });
});

// Auth routes
app.post("/signup", postSignup);
app.post("/login", postLogin);

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
