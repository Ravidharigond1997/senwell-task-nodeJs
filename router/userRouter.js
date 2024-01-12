import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createUser,
  loginController,
} from "../controller.js/userController.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginController);

export default router;
