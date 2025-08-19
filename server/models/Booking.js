import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["confirmed", "cancelled"], default: "confirmed" }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
