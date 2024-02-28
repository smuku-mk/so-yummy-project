import User from "../../database/models/userSchema.js";

export const getUser = async (filter) => {

  const user = await User.findOne(filter);
  if (!user) throw new Error("User not found"); // może się okazać niepotrzebne
  return user;
  
};
