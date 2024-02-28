import { updateUser } from "../../services/user/updateUser.js";

//chyba to wystarczy 
/* export const updateUserName = async (req, res) => {
  return res.send(await updateUser(req.user.email, req.body));
}; */

export const updateUserName = async (req, res) => {
      const user = await updateUser(req.user.email, req.body);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.send({ email: user.email, name: user.name });
  };
  