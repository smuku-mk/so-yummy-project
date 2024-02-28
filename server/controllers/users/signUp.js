import { createUser } from "../../services/user/createUser.js";
import { generateToken } from "../../services/user/generateToken.js"
import sendVerificationMail from "../../services/mail/sendVerificationMail.js";

export const signUp = async (req, res) => {
    
      const { name, email, password } = req.body;
      const verificationToken = generateToken({ email });
      const createdUser = await createUser({
        name,
        email,
        password,
        verificationToken,
      });
  
      await sendVerificationMail(email, verificationToken, name);
  
      return res.status(200).send({
        user: {
          name: createdUser.name,
          email: createdUser.email,
          avatarURL: createdUser.avatarURL,
          verify: createdUser.verify,
        },
        verificationToken: verificationToken,
        avatarURL: createdUser.avatarURL,
      });
    };