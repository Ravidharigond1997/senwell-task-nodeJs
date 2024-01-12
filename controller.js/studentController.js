import User from "../module/user.js";
import Progress from "../module/progress.js";
import Admission from "../module/admission.js";

export const getProgress = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;

    const progressData = await Progress.findOne({ rollNo: rollNo });

    if (!progressData) {
      return res.status(404).json({ error: "student data not found" });
    }

    res.status(201).send({
      success: true,
      message: "ProgressData send successfully",
      progressData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAdmissionData = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;

    const admissionData = await Admission.findOne({ rollNo: rollNo });

    if (!admissionData) {
      return res.status(404).json({ error: "student data not found" });
    }

    res.status(201).send({
      success: true,
      message: "Adimission Data send successfully",
      admissionData,
    });
  } catch (err) {
    console.log(err);
  }
};
