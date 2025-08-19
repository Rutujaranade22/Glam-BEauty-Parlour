import express from "express";
import {
  createService,
  getAllServices,
  getServiceById,
} from "../controllers/service.controller.js";

const router = express.Router();

// ✅ Add a new service
router.post("/", createService);

// ✅ Get all services
router.get("/", getAllServices);

// ✅ Get single service by ID (for booking page)
router.get("/:id", getServiceById);

export default router;
