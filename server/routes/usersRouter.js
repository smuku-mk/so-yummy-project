import express from "express";

import { auth } from "../middlewares/user/auth.js";
import { catchErr } from "../middlewares/catchErr.js";
import { upload } from "../services/multer/config.js";

import { userValidator } from "../middlewares/user/validators/userValidator.js";
import { loginValidator } from "../middlewares/user/validators/loginValidator.js";
import { nameValidator } from "../middlewares/user/validators/nameValidator.js";

import { signUp, logIn, resendMail, verifyUser, currentUser, logOut, updateAvatar, updateUserName } from "../controllers/users/index.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", userValidator, catchErr(signUp));
usersRouter.post("/login", loginValidator, catchErr(logIn));
usersRouter.post("/verify", catchErr(resendMail));
usersRouter.get("/verify/:verificationToken", catchErr(verifyUser));

usersRouter.get("/current", auth, catchErr(currentUser));
usersRouter.post("/logout", auth, catchErr(logOut));
usersRouter.post("/upload", auth, upload.single("image"), catchErr(updateAvatar));
usersRouter.patch("/", auth, nameValidator, catchErr(updateUserName));