import sendMail from "../mail/mail.service.js";
import User from "./user.schema.js";
import { generateAccessToken } from "../auth/auth.service.js";

import * as ctrlUser from "./user.service.js";

export const signupHandler = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const verificationToken = generateAccessToken({ email });
    const createdUser = await ctrlUser.createUser({
      name,
      email,
      password,
      verificationToken,
    });

    await sendMail(email, verificationToken, name);

    return res.status(200).send({
      user: {
        name: createdUser.name,
        email: createdUser.email,
        avatarURL: createdUser.avatarURL,
        verify: createdUser.verify,
      },
      verificationToken: verificationToken,
      avatarURL: createdUser.avatarURL,
    });
  } catch (e) {
    console.error(e);
    const { message } = e;
    if (e instanceof ctrlUser.DuplicatedKeyError) {
      return res.status(409).send({ message });
    }

    return next(e);
  }
};

export const loginHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userEntity = await ctrlUser.getUser({ email });

    if (!userEntity) {
      return res.status(401).send({ message: "Wrong credentials." });
    }

    const userPasswordValidate = await userEntity.validatePassword(password);

    if (!userPasswordValidate) {
      return res.status(401).send({ message: "Wrong credentials." });
    }

    if (!userEntity.verified) {
      return res.status(403).send({ message: "User is not verified." });
    }

    const userPayload = {
      name: userEntity.name,
      email: userEntity.email,
    };

    const token = generateAccessToken(userPayload);
    await ctrlUser.updateUser(userEntity.email, { token });

    return res.status(200).send({
      user: userPayload,
      token,
      avatarURL: userEntity.avatarURL,
    });
  } catch (e) {
    console.error(e);
    return next(e);
  }
};

export const logoutHandler = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const user = await User.findOne({ token });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    user.token = null;
    await user.save();

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    next(error);
  }
};

export const currentHandler = async (req, res, next) => {
  try {
    const { name, email, avatarURL } = req.user;
    return res.status(200).send({ user: { name, email, avatarURL } });
  } catch (e) {
    return next(e);
  }
};

export const updateUserNameHandler = async (req, res, next) => {
  try {
    const user = await ctrlUser.updateUser(req.user.email, req.body);
    if (!user) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.send({ email: user.email, name: user.name });
  } catch (err) {
    return next(err);
  }
};

export const verifyHandler = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await ctrlUser.getUser({ verificationToken });

    if (!user) {
      return res
        .status(404)
        .send({ message: "Verification token is not valid or expired." });
    }

    if (user.verified) {
      return res.status(400).send({ message: "User is already verified." });
    }

    await updateUser(user.email, {
      verified: true,
      verificationToken: null,
    });

    return res.status(200).send({ message: "User has been verified." });
  } catch (error) {
    console.error("Error while verifying user:", error);
    return next(error);
  }
};

export const resendVerificationHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await ctrlUser.getUser({ email });

    if (!user) {
      return res.status(404).send({ message: "User does not exist." });
    }

    if (user.verified) {
      return res.status(400).send({ message: "User is already verified." });
    }

    await sendMail(email, user.verificationToken, user.name);

    return res.status(200).send({ message: "Email resent successfully." }); // Dodano komunikat o sukcesie w ciele odpowiedzi
  } catch (error) {
    return next(error);
  }
};
