import gravatar from "gravatar";
import User from "./user.schema.js";

export class DuplicatedKeyError extends Error {
  constructor(keyName, value) {
    super(`${keyName} has to be unique. ${value} is already taken.`);
  }
}

export class UnknownDatabaseError extends Error {
  constructor() {
    super("Oops, something went wrong at database layer.");
  }
}

export const createUser = async ({
  name,
  email,
  password,
  verificationToken,
}) => {
  try {
    const avatar = gravatar.url(email);
    const newUser = await User.create({
      name,
      email,
      password,
      verificationToken,
      avatarURL: avatar,
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
    console.log("Filter:", filter); 

    const user = await User.findOne(filter);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error while fetching user:", error);
    throw new Error("UnknownDatabaseError");
  }
};

export const updateUser = async (email, userData) => {
  try {
    const updatedUser = await User.findOneAndUpdate({ email }, userData, {
      new: true,
    });
    if (!updatedUser) {
      throw new Error("User not found");
    }

    console.log("User updated successfully:", updatedUser); 

    return updatedUser;
  } catch (error) {
    console.error("Error while updating user:", error);
    throw new Error("UnknownDatabaseError");
  }
};

export const updateUserNameHandler = async (email, name) => {
  try {
    return await User.findOneAndUpdate(email, name, {
      new: true,
    });
  } catch (error) {}
};
