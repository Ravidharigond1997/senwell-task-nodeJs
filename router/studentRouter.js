import express from "express";
import { verfiyUser } from "../middleware/authMiddleware.js";
import {
  getAdmissionData,
  getProgress,
} from "../controller.js/studentController.js";

const router = express.Router();

router.get("/getProgressData/:rollNo", verfiyUser, getProgress);
router.get("/getAdmissionData/:rollNo", verfiyUser, getAdmissionData);

export default router;
