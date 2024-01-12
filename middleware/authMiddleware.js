import jwt from "jsonwebtoken";
import User from "../module/user.js";
import asyncHandler from "express-async-handler";

const JWT_SECRATE = "ravi12345";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res
          .status(401)
          .json({ error: "Unauthorized. No token provided." });
      }

      const decode = jwt.verify(token, JWT_SECRATE); // Replace 'your-secret-key' with your actual secret key
      const userID = decode.id;

      const user = await User.findById(userID);

      if (!user || !user.isAdmin) {
        return res
          .status(403)
          .json({ error: "Access forbidden. User is not an admin." });
      }

      req.userId = userID;
      next();
    } catch (error) {
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not  authorized, no token");
  }
});

export const verfiyUser = async (req, res, next) => {
  console.log("hello user");
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decode = jwt.decode(token, JWT_SECRATE);
        req.user = await User.findById(decode.id).select("-password");
        next();
      } catch (error) {
        throw new Error("Not authorized, token failed");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not  authorized, no token");
    }
  } catch (error) {
    console.log(error);
  }
};
