import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// 🔐 Function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });
};

// 🟩 Signup
const postSignup = async (req, res) => {
    try {
        const { name, email, password, city } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            city,
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            message: "Signup successful",
            data: savedUser,
            success: true,
        });
    } catch (error) {
        console.error("🔴 Signup Error:", error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
            success: false,
        });
    }
};

// 🟦 Login
const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password",
                success: false,
            });
        }

        // ✅ Generate token
        const token = generateToken(existingUser._id);

        return res.status(200).json({
            message: "Login successful",
            token: token,
            user: existingUser,
            success: true,
        });
    } catch (error) {
        console.error("🔴 Login Error:", error);
        return res.status(500).json({
            message: "Something went wrong during login",
            error: error.message,
            success: false,
        });
    }
};

export { postSignup, postLogin };
