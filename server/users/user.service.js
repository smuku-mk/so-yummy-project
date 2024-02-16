import User from "./user.schema";
import gravatar from "gravatar";
import { v4 as uuidv4 } from "uuid";

class DuplicatedKeyError extends Error {
  constructor(keyName, value) {
    super(`${keyName} has to be unique. ${value} is already taken.`);
  }
}

class UnknownDatabaseError extends Error {
  constructor() {
    super("Oops, something went wrong at database layer.");
  }
}

export const createUser = async ({ name, email, password }) => {
  try {
    const verificationToken = uuidv4();
    const avatar = gravatar.url(email);
    const newUser = await User.create({
      name,
      email,
      password,
      avatarURL: avatar,
      verificationToken,
      verified: false,
    });
    return newUser;
  } catch (e) {
    console.error(e);

    if (e.code === 11000) {
      const [[key, value]] = Object.entries(e.keyValue);
      throw new DuplicatedKeyError(key, value);
    }

    throw new UnknownDatabaseError();
  }
};

export const getUser = async (filter) => {
  try {
    return await User.findOne(filter);
  } catch (e) {
    console.error(e);
    throw new UnknownDatabaseError();
  }
};

export const updateUser = async (email, userData) => {
  try {
    return await User.findOneAndUpdate({ email }, userData, { new: true });
  } catch (e) {
    console.error(e);
    throw new UnknownDatabaseError();
  }
};

export const updateUserNameHandler = async (email, name) => {
  try {
    return await User.findOneAndUpdate(email, name, {
      new: true,
    });
  } catch (error) {}
};
