import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (user) => {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in environment variables.");
    }
  
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1w",
    });
  };