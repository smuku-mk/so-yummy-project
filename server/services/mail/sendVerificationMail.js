import nodemailer from "nodemailer";
import "dotenv/config";

const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:`;

const sendVerificationMail = async (email, verificationToken, name) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    text: `Hello! Please verify your account by visiting ${BASE_URL}${PORT}/users/verify/${verificationToken}`,
    html: `
      <div>
        <h2>Dear ${name}</h2>
        <p>
          Thank you for signing up for our service! We're excited to have you
          on board.
        </p> 
        <p>
          Please verify your email address by clicking this link:
          <a href="${BASE_URL}${PORT}/users/verify/${verificationToken}">
            VERIFY
          </a>
        </p>
        <p>
          <p> Best regards,</p>
          <p> Yummers Team</p>
        </p>
      </div>
    `,
  };

  await transporter.sendVerificationMail(mailOptions);
 
};

export default sendVerificationMail;
