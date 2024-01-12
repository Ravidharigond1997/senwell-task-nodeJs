import User from "../module/user.js";
import Progress from "../module/progress.js";
import Admission from "../module/admission.js";

export const getProgress = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;

    const progressData = await Progress.findOne({ rollNo: rollNo });

    if (!progressData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(201).send({
      success: true,
      message: "Progress create succefully",
      progressData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAdmissionData = async (req, res) => {
  try {
    const id = req.params.progressId;

    const progressData = await Adi;

    if (!progressData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(201).send({
      success: true,
      message: "Progress create succefully",
      progressData,
    });
  } catch (err) {
    console.log(err);
  }
};
