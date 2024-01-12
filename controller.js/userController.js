import User from "../module/user.js";
import { hashPassword, comparePassword } from "../helper/hashPassword.js";
import generateToken from "../config/generateToken.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, rollNo, address, password, isAdmin } = req.body;

    if (!name || !email || !rollNo || !address || !password) {
      res.status(400).send({
        success: false,
        message: "Please Enter all the required field",
      });
      return;
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    //register user password encreting and decrepting
    const hashPasswords = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      address,
      rollNo,
      password: hashPasswords,
      isAdmin,
    });
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      req.status(400).send({
        success: false,
        message: "Please Enter all the required field",
      });
      return;
    }
    const user = await User.findOne({ email });

    const comparedPassword = comparePassword(password, user.password);

    if (!comparedPassword) {
      req.status(200).send({
        success: false,
        message: "Please Enter Correct Password",
      });
    }

    const token = generateToken(user._id);

    res.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      ddress: user.address,
      isAdmin: user.isAdmin,
      token,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};
