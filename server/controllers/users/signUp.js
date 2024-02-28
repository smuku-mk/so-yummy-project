import { createUser } from "../../services/user/createUser.js";
import { generateToken } from "../../services/user/generateToken.js"
import sendVerificationMail from "../../services/mail/sendVerificationMail.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const verificationToken = generateToken({ email });

        let createdUser;
        try {
            createdUser = await createUser({
                name,
                email,
                password,
                verificationToken,
            });
        } catch (error) {
            return res.status(500).send({ error: 'Error creating user' });
        }

        try {
            await sendVerificationMail(email, verificationToken, name);
        } catch (error) {
            return res.status(500).send({ error: 'Error sending verification mail' });
        }

        return res.status(200).send({
            user: {
                name: createdUser.name,
                email: createdUser.email,
                avatarURL: createdUser.avatarURL,
                verify: createdUser.verify,
            },
            verificationToken: verificationToken,
        });
    } catch (error) {
        return res.status(500).send({ error: 'Unexpected error occurred' });
    }
};