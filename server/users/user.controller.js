import { sendUserVerificationMail } from "./user.mailer";
import {
  createUser,
  DuplicatedKeyError,
  getUser,
  updateUser,
  generateAccessToken,
} from "./user.service";

import multer from "multer";

export const signupHandler = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const createdUser = await createUser({ name, email, password });

    await sendUserVerificationMail(
      createdUser.email,
      createdUser.verificationToken
    );

    return res.status(201).send({
      user: {
        name: createdUser.name,
        email: createdUser.email,
        avatarURL: createdUser.avatarURL,
        verify: createdUser.verify,
      },
    });
  } catch (e) {
    console.error(e);
    const { message } = e;
    if (e instanceof DuplicatedKeyError) {
      return res.status(409).send({ message });
    }

    return next(e);
  }
};

export const loginHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userEntity = await getUser({ email });

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
    await updateUser(userEntity.email, { token });

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
    const { email } = req.user;
    await updateUser(email, { token: null });

    return res.status(204).send();
  } catch (e) {
    return next(e);
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
    const user = await updateUser(req.user.email, req.body);
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
    const user = await getUser({ verificationToken });

    if (!user) {
      return res
        .status(404)
        .send({ message: "Verification token is not valid or expired. " });
    }

    if (user.verified) {
      return res.status(400).send({ message: "User is already verified. " });
    }

    await updateUser(user.email, {
      verified: true,
      verificationToken: null,
    });

    return res.status(200).send({ message: "User has been verified." });
  } catch (e) {
    return next(e);
  }
};

export const resendVerificationHandler = async (req, res, next) => {
  try {
    const user = await getUser({ email: req.body.email });

    if (!user) {
      return res.status(404).send({ message: "User does not exist." });
    }

    if (user.verified) {
      return res.status(400).send({ message: "User is already verified." });
    }

    await sendUserVerificationMail(user.email, user.verificationToken);

    return res.status(204).send();
  } catch {
    return next(e);
  }
};
