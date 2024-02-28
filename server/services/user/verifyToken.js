import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyToken = (token) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not defined in environment variables.");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};
  