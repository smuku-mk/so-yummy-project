import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import User from "../users/user.schema.js";

const sendMail = async (email, verificationToken) => {
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
    subject: "Welcome to our site!",
    text: `Hello! Please verify your account by visiting http://localhost:3000/users/verify/${verificationToken}`,
    html: `<h2>Hello!</h2><br/>Please verify your account by clicking <a href="http://localhost:3000/users/verify/${verificationToken}">here</a>!`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Mail sending failed!");
  }
};

export default sendMail;
