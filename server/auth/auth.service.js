import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateAccessToken = (user) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in environment variables.");
    }

    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1w",
    });
  } catch (error) {
    console.error("Error generating access token:", error);
    throw new Error("Access token generation failed.");
  }
};

export const verifyToken = (token) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in environment variables.");
    }

    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Error verifying token:", error);

    if (error instanceof jwt.TokenExpiredError) {
      throw new Error("Token expired.");
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error("Token is invalid.");
    } else {
      throw new Error("Unknown token verification error.");
    }
  }
};
