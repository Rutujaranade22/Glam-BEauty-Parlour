import express from "express";
import { protect } from "../middleware/userMiddle.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "User profile fetched successfully",
    user: req.user,
    success: true,
  });
});

export default router;
