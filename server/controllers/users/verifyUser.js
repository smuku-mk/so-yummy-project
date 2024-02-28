import { getUser } from "../../services/user/getUser.js";
import { updateUser } from "../../services/user/updateUser.js";

export const verifyUser = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await getUser({ verificationToken });

    if (!user) return res.status(404).send({ message: "Verification token is not valid or expired." });
    if (user.verified) return res.status(400).send({ message: "User is already verified." });

    await updateUser(user.email, { verified: true, verificationToken: null });

    return res.status(200).send({ message: "User has been verified." });
};