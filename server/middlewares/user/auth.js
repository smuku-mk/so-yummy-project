import { extractToken } from "../../services/user/extractToken.js";
import { verifyToken } from "../../services/user/verifyToken.js";
import { getUser } from "../../services/user/getUser.js";

export const auth = async (req, res, next) => {
    try {
      const token = extractToken(req.headers);
        if (!token) {
        throw new Error("Authorization token is missing.");
      }
      const { email } = verifyToken(token);
      const user = await getUser({ email });
        if (!user) {
            throw new Error("User not found");
        }
      req.user = user;
      return next();
    } catch (e) {
      console.error(e);
      return res.status(401).send({ message: e.message });
    }
  };