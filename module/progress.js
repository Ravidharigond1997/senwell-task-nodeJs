import mongoose from "mongoose";

const progressModel = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    cname: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Progress = mongoose.model("Progress", progressModel);

export default Progress;
