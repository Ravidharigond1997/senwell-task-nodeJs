import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createAdmission,
  createProgress,
  deleteProgressData,
  deleteAdmissionData,
  getAdmissionData,
  getProgressData,
} from "../controller.js/adminController.js";

const router = express.Router();

router.post("/createProgress", protect, createProgress);
router.post("/createAdmission", protect, createAdmission);
router.delete("/deleteProgressData/:rollNo", protect, deleteProgressData);
router.delete("/deleteAdmissionData/:rollNo", protect, deleteAdmissionData);
router.get("/getAdmissionData", protect, getAdmissionData);
router.get("/getProgressData", protect, getProgressData);

export default router;
