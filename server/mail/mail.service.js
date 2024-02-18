import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import User from "../users/user.schema.js";

const sendMail = async (email, verificationToken, name) => {
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
    subject: "Welcome to Our Newsletter! Verify Your Email",
    text: `Hello! Please verify your account by visiting http://localhost:3000/users/verify/${verificationToken}`,
    html: `
      <div>
        <h2>Dear ${name}</h2>
        <p>
          Thank you for signing up for our newsletter! We're excited to have you
          on board.
        </p> 
        <p>
          To ensure that you receive our latest updates and exclusive
          offers, please verify your email address by clicking the link below:
          <a href="http://localhost:3000/users/verify/${verificationToken}">
            here
          </a>
        </p>
        <p>
          If you have any questions or need further assistance, feel free to
          reply to this email. We're here to help!
          <p> Best regards,</p>
          <p> So Yummy Team
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Mail sending failed!");
  }
};

export default sendMail;
