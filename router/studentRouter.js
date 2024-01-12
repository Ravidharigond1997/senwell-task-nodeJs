import express from "express";
import { verfiyUser } from "../middleware/authMiddleware.js";
import { getProgress } from "../controller.js/studentController.js";

const router = express.Router();

router.get("/getProgressData/:rollNo", verfiyUser, getProgress);

export default router;
