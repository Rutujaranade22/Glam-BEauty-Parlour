 import User from "../models/User.js";
import bcrypt from "bcrypt"; //  Import bcrypt

const postSignup = async (req, res) => {
    try {
        console.log("🟢 Body Received:", req.body);

        const { name, email, password, city } = req.body;

        // 🔒 Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword, // store hashed password
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

        // 🔒 Compare hashed password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Login successful",
            data: existingUser,
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
