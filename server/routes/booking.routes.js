import express from "express";
import { createBooking, getMyBookings, cancelBooking } from "../controllers/booking.controller.js";
import { protect } from "../middleware/userMiddle.js";

const router = express.Router();

// Create booking
router.post("/", protect, createBooking);

// My bookings
router.get("/my", protect, getMyBookings);

// Cancel booking
router.put("/cancel/:id", protect, cancelBooking);

export default router;
