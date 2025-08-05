import User from "../models/user.js";

const postSignup = async (req, res) => {
    try {
        console.log("🟢 Body Received:", req.body); // 👈 Debug log added

        const { name, email, password, city } = req.body;

        const newUser = new User({
            name,
            email,
            password,
            city,
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            message: "Signup successful",
            data: savedUser,
            success: true,
        });
    } catch (error) {
        console.error("🔴 Signup Error:", error); // 👈 Full error in terminal
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
            success: false,
        });
    }
};

export { postSignup };
