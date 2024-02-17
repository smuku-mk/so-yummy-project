import express from "express";
import {
  signupHandler,
  loginHandler,
  logoutHandler,
  currentHandler,
  verifyHandler,
  resendVerificationHandler,
  updateUserNameHandler,
} from "./user.controller.js";

import {
  userValidationMiddleware,
  userNameValidator,
  userLoginValidator,
} from "./user.validators.js";
import { upload, updateAvatar } from "./user.avatar.js";

import { authMiddleware } from "../auth/auth.middlewares.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", userValidationMiddleware, signupHandler);
usersRouter.post("/login", userLoginValidator, loginHandler);
usersRouter.post("/logout", authMiddleware, logoutHandler);
usersRouter.get("/current", authMiddleware, currentHandler);
usersRouter.get("/verify/:verificationToken", verifyHandler);
usersRouter.post("/verify", resendVerificationHandler);
usersRouter.patch(
  "/",
  authMiddleware,
  userNameValidator,
  updateUserNameHandler
);

usersRouter.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  updateAvatar
);
