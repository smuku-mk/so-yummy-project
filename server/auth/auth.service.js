import { JsonWebToken as JWT } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateAccessToken = (user) => {
  return JWT.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token) => {
  try {
    return JWT.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.error(e);

    if (e instanceof JWT.TokenExpiredError) {
      throw new Error("Token expired.");
    }

    if (e instanceof JWT.JsonWebTokenError) {
      throw new Error("Token is invalid.");
    }

    throw new Error("Unknown token verification error.");
  }
};
