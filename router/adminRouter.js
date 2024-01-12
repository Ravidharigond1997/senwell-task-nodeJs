import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createAdmission,
  createProgress,
  deleteProgressData,
  deleteAdmissionData,
} from "../controller.js/adminController.js";

const router = express.Router();

router.post("/createProgress", protect, createProgress);
router.post("/createAdmission", protect, createAdmission);
router.delete("/deleteProgressData/:rollNo", protect, deleteProgressData);
router.delete("/deleteAdmissionData/:rollNo", protect, deleteAdmissionData);

export default router;
