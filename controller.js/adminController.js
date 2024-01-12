import Admission from "../module/admission.js";

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
