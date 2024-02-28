import { getUser } from "../../services/user/getUser.js";
import { updateUser } from "../../services/user/updateUser.js";
import { generateToken } from "../../services/user/generateToken.js";

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser({ email });

  if (!user || !(await user.validatePassword(password))) {
    return res.status(401).send({ message: "Wrong credentials." });
  }

  if (!user.verified) {
    return res.status(403).send({ message: "User is not verified." });
  }

  const payload = { name: user.name, email: user.email };
  const token = generateToken(payload);
  await updateUser(user.email, { token });

  return res.status(200).send({
    user: payload,
    token,
    avatarURL: user.avatarURL,
  });
};