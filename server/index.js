import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if (conn.connection.readyState === 1) {
            console.log("✅ MongoDB connected");
        }
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
    }
};

app.get("/", (req, res) => {
    res.json({ message: "Hello from server..." });
});

// Call the connectDB function BEFORE starting the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
});
