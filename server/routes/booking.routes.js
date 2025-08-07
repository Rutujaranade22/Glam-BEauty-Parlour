import express from "express";
import {
  createBooking,
  getMyBookings,
  cancelBooking,
} from "../controllers/booking.controller.js";
import { protect } from "../middleware/userMiddle.js";

const router = express.Router();

router.post("/", protect, createBooking);           // Make booking
router.get("/my", protect, getMyBookings);          // My bookings
router.put("/cancel/:id", protect, cancelBooking);  // Cancel by ID

export default router;
