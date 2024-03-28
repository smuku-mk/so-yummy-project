import gravatar from 'gravatar';
import User from '../../database/models/userSchema.js';

export const createUser = async ({
    name,
    email,
    password,
    verificationToken,
  }) => {
    const avatar = gravatar.url(email);// opcjonalnie zamienić na default url w public/avatars
    return await User.create({
      name,
      email,
      password,
      verificationToken,
      avatarURL: avatar,
    });
  };