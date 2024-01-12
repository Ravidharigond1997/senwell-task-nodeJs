import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createAdmission,
  createProgress,
} from "../controller.js/adminController.js";

const router = express.Router();

router.post("/createProgress", protect, createProgress);
router.post("/createAdmission", protect, createAdmission);

export default router;
