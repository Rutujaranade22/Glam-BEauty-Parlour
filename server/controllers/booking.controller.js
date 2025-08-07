import Booking from "../models/Booking.js";

const createBooking = async (req, res) => {
  try {
    const { service, date, time } = req.body;

    if (!service || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new Booking({
      user: req.user._id, // from middleware
      service,
      date,
      time,
    });

    const savedBooking = await booking.save();
    res.status(201).json({ message: "Booking successful", data: savedBooking });
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("service", "name price duration")
      .sort({ date: -1 });

    res.status(200).json({ message: "Bookings fetched", data: bookings });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings", error: err.message });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const booking = await Booking.findOne({ _id: bookingId, user: req.user._id });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "cancelled";
    await booking.save();

    res.status(200).json({ message: "Booking cancelled", data: booking });
  } catch (err) {
    res.status(500).json({ message: "Cancel failed", error: err.message });
  }
};

export { createBooking, getMyBookings, cancelBooking };
