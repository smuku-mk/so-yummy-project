import Joi from "joi";
import { validateRequest } from "./validateRequest.js";

const userNameSchema = Joi.object({
    name: Joi.string().max(30).required(),
  });
  
export const nameValidator = validateRequest(userNameSchema);