import Booking from "../models/Booking.js";

// ✅ Create Booking
export const createBooking = async (req, res) => {
  try {
    const { serviceId, date, time } = req.body;

    if (!serviceId || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new Booking({
      user: req.user._id, // from protect middleware
      service: serviceId,
      date,
      time,
      status: "confirmed"
    });

    const savedBooking = await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: savedBooking
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error: error.message });
  }
};

// ✅ Get all bookings for logged-in user
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("service")
      .sort({ date: -1 });

    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};

// ✅ Cancel booking
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { status: "cancelled" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking cancelled", booking });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling booking", error: error.message });
  }
};
