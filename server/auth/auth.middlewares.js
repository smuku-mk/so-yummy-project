import { verifyToken } from "./auth.service.js";
import { getUser } from "../users/user.service.js";

export const extractTokenFromHeaders = (headers) => {
  return headers.authorization?.replace("Bearer ", "");
};

export const authMiddleware = async (req, res, next) => {
  try {
    const token = extractTokenFromHeaders(req.headers);

    if (!token) {
      throw new Error("Authorization token is missing.");
    }

    const { email } = verifyToken(token);
    const userEntity = await getUser({ email });

    if (!userEntity || userEntity.token !== token) {
      throw new Error("Token is invalid.");
    }

    req.user = userEntity;
    return next();
  } catch (e) {
    console.error(e);
    return res.status(401).send({ message: e.message });
  }
};
