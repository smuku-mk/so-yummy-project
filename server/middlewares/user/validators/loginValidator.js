import Joi from 'joi';
import { validateRequest } from './validateRequest.js';

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

export const loginValidator = validateRequest(loginSchema);