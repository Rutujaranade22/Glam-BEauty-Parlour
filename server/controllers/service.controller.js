import Service from "../models/Service.js";

// ✅ Create a new service
const createService = async (req, res) => {
  try {
    const { name, duration, price } = req.body;

    // Validation
    if (!name || !duration || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const service = new Service({ name, duration, price });
    const savedService = await service.save();

    res.status(201).json({
      message: "Service created successfully",
      service: savedService,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating service",
      error: err.message,
    });
  }
};

// ✅ Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ services }); // ✅ Changed `data` → `services`
  } catch (err) {
    res.status(500).json({
      message: "Error fetching services",
      error: err.message,
    });
  }
};

export { createService, getAllServices };
