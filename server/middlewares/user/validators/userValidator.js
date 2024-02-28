import Joi from "joi";
import { validateRequest } from "./validateRequest.js";

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
});

export const userValidator = validateRequest(userSchema);