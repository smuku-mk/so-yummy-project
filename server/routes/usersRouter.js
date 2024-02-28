import express from "express";

import { auth } from "../middlewares/user/auth.js";
import { catchErr } from "../middlewares/catchErr.js";
import { upload } from "../services/multer/config.js";

import { userValidator } from "../middlewares/user/validators/userValidator.js";
import { loginValidator } from "../middlewares/user/validators/loginValidator.js";
import { nameValidator } from "../middlewares/user/validators/nameValidator.js";

import { signUp } from "../controllers/users/signUp.js";
import { logIn } from "../controllers/users/logIn.js";
import { resendMail } from "../controllers/users/resendMail.js";
import { verifyUser } from "../controllers/users/verifyUser.js";
import { currentUser } from "../controllers/users/currentUser.js";
import { logOut } from "../controllers/users/logOut.js";
import { updateAvatar } from "../controllers/users/updateAvatar.js";
import { updateUserName } from "../controllers/users/updateUserName.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", userValidator, catchErr(signUp));
usersRouter.post("/login", loginValidator, catchErr(logIn));
usersRouter.post("/verify", catchErr(resendMail));
usersRouter.get("/verify/:verificationToken", catchErr(verifyUser));

usersRouter.get("/current", auth, catchErr(currentUser));
usersRouter.post("/logout", auth, catchErr(logOut));
usersRouter.post("/upload", auth, upload.single("image"), catchErr(updateAvatar));
usersRouter.patch("/", auth, nameValidator, catchErr(updateUserName));