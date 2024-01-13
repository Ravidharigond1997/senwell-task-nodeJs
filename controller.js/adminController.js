import Admission from "../module/admission.js";
import Progress from "../module/progress.js";

export const createProgress = async (req, res) => {
  try {
    const { studentName, rollNo, cname, grade } = req.body;

    if (!studentName || !rollNo || !cname || !grade) {
      req.status(400).send({
        success: false,
        message: "all filed are required",
      });
      return;
    }

    const userExists = await Progress.findOne({ rollNo });

    if (userExists) {
      res.status(400);
      throw new Error("This student progress already exists");
    }

    const progress = await Progress.create({
      studentName,
      rollNo,
      cname,
      grade,
    });

    res.status(201).send({
      success: true,
      message: "Progress create succefully",
      progress,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

export const createAdmission = async (req, res) => {
  try {
    const { studentName, rollNo, isAdmission, Amount } = req.body;

    if (!studentName || !rollNo || !isAdmission || !Amount) {
      res.status(400).send({
        success: false,
        message: "all filed are required",
      });
      return;
    }

    const admissionExists = await Admission.findOne({ rollNo });

    if (admissionExists) {
      res.status(400);
      throw new Error("This student admission already done");
    }

    const admissionData = await Admission.create({
      studentName,
      rollNo,
      isAdmission,
      Amount,
    });

    res.status(201).send({
      success: true,
      message: "Admission create succefully",
      admissionData,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

export const getAdmissionData = async (req, res) => {
  try {
    const admissionData = await Admission.find();

    if (!admissionData) {
      return res.status(404).json({ error: "student data not found" });
    }

    res.status(201).send({
      success: true,
      message: "Adimission Data  successfully",
      admissionData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProgressData = async (req, res) => {
  try {
    const admissionData = await Progress.find();

    if (!admissionData) {
      return res.status(404).json({ error: "student data not found" });
    }

    res.status(201).send({
      success: true,
      message: "Progress Data  successfully",
      admissionData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProgressData = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;

    const progressData = await Progress.findOneAndDelete({ rollNo: rollNo });

    if (!progressData) {
      return res.status(404).json({ error: "student data not found" });
    }

    res.status(201).send({
      success: true,
      message: "ProgressData deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAdmissionData = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;

    const admissionData = await Admission.findOneAndDelete({ rollNo: rollNo });

    if (!admissionData) {
      return res.status(404).json({ error: "student data not found" });
    }

    res.status(201).send({
      success: true,
      message: "ProgressData deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
