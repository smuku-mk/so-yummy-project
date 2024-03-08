import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const userLoginValidator = (req, res, next) => {
  const logUser = req.body;

  const { error } = loginSchema.validate(logUser);

  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  return next();
};

export const userValidationMiddleware = (req, res, next) => {
  const newUser = req.body;

  const { error } = userSchema.validate(newUser);

  if (error) {
    return res.status(400).send({ error: error.message });
  }

  return next();
};

const userNameSchema = Joi.object({
  name: Joi.string().max(30).required(),
});

export const userNameValidator = (req, res, next) => {
  const { error } = userNameSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  return next();
};
