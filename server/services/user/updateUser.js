import User from "../../database/models/userSchema.js";

  export const updateUser = (email, userData) => 
  User.findOneAndUpdate({ email }, userData, { new: true });