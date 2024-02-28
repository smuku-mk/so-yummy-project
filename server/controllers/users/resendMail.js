import sendVeryficationMail from "../../services/mail/sendVerificationMail.js";

export const resendMail = async (req, res) => {
    const { email } = req.body;
    const user = await ctrlUser.getUser({ email });
  
    if (!user) return res.status(404).send({ message: "User does not exist." });
    if (user.verified) return res.status(400).send({ message: "User is already verified." });
  
    await sendVeryficationMail(email, user.verificationToken, user.name);
    return res.status(200).send({ message: "Email resent successfully." });
  };