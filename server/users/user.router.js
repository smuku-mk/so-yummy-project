import express from "express";
import * as ctrlUser from "./user.controller.js";
import asyncWrapper from "../helpers/asyncWrapper.js";
import {
  userValidationMiddleware,
  userNameValidator,
  userLoginValidator,
} from "./user.validators.js";
import { upload, updateAvatar } from "./user.avatar.js";

import { authMiddleware } from "../auth/auth.middlewares.js";

export const usersRouter = express.Router();

usersRouter.post(
  "/signup",
  userValidationMiddleware,
  asyncWrapper(ctrlUser.signupHandler)
);
usersRouter.post(
  "/login",
  userLoginValidator,
  asyncWrapper(ctrlUser.loginHandler)
);
usersRouter.post(
  "/logout",
  authMiddleware,
  asyncWrapper(ctrlUser.logoutHandler)
);
usersRouter.get(
  "/current",
  authMiddleware,
  asyncWrapper(ctrlUser.currentHandler)
);
usersRouter.get(
  "/verify/:verificationToken",
  asyncWrapper(ctrlUser.verifyHandler)
);
usersRouter.post("/verify", asyncWrapper(ctrlUser.resendVerificationHandler));
usersRouter.patch(
  "/",
  authMiddleware,
  userNameValidator,
  asyncWrapper(ctrlUser.updateUserNameHandler)
);

usersRouter.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  asyncWrapper(updateAvatar)
);
