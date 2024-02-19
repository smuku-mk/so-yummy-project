import express from "express";
import * as ctrlUser from "./user.controller.js";

import {
  userValidationMiddleware,
  userNameValidator,
  userLoginValidator,
} from "./user.validators.js";
import { upload, updateAvatar } from "./user.avatar.js";

import { authMiddleware } from "../auth/auth.middlewares.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", userValidationMiddleware, ctrlUser.signupHandler);
usersRouter.post("/login", userLoginValidator, ctrlUser.loginHandler);
usersRouter.post("/logout", authMiddleware, ctrlUser.logoutHandler);
usersRouter.get("/current", authMiddleware, ctrlUser.currentHandler);
usersRouter.get("/verify/:verificationToken", ctrlUser.verifyHandler);
usersRouter.post("/verify", ctrlUser.resendVerificationHandler);
usersRouter.patch(
  "/",
  authMiddleware,
  userNameValidator,
  ctrlUser.updateUserNameHandler
);

usersRouter.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  updateAvatar
);
