import { Schema,model } from "mongoose";

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to user who booked
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service", // Reference to service
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
