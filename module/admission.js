import mongoose from "mongoose";

const admissionModel = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    rollNo: {
      // Corrected the field name
      type: String,
      required: true,
    },
    isAdmission: {
      type: String,
      required: true,
    },
    Amount: {
      type: String,
    },
    admissionDate: {
      type: Date,
      default: Date.now, // Set a default value to the current date
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admission", admissionModel);
