import Booking from "../models/Booking.js";

// ✅ Create new booking
const createBooking = async (req, res) => {
  try {
    const { service, date, time } = req.body;

    const booking = new Booking({
      user: req.user._id, // coming from middleware
      service,
      date,
      time,
    });

    const savedBooking = await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      data: savedBooking,
      success: true,
    });
  } catch (error) {
    console.error("❌ Booking Error:", error);
    res.status(500).json({
      message: "Failed to create booking",
      error: error.message,
      success: false,
    });
  }
};

// ✅ Get bookings for logged-in user
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("service");

    res.status(200).json({
      message: "Bookings fetched",
      data: bookings,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get bookings",
      error: error.message,
      success: false,
    });
  }
};

// ✅ Cancel a booking (user-specific)
const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const booking = await Booking.findOne({ _id: bookingId, user: req.user._id });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
        success: false,
      });
    }

    booking.status = "cancelled";
    await booking.save();

    res.status(200).json({
      message: "Booking cancelled successfully",
      data: booking,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to cancel booking",
      error: error.message,
      success: false,
    });
  }
};

export { createBooking, getMyBookings, cancelBooking };
