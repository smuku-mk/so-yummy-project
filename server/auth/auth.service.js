import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.error(e);

    if (e instanceof jwt.TokenExpiredError) {
      throw new Error("Token expired.");
    }

    if (e instanceof jwt.JsonWebTokenError) {
      throw new Error("Token is invalid.");
    }

    throw new Error("Unknown token verification error.");
  }
};
