import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, "ravi12345", {
    expiresIn: "7d",
  });
};

export default generateToken;
