import express from "express";
import { createService, getAllServices } from "../controllers/service.controller.js";

const router = express.Router();

router.post("/", createService);         // Add a new service
router.get("/", getAllServices);         // Get all services

export default router;
