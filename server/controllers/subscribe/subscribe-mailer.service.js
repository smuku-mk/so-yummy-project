// import sendVerificationMail from "../../services/mail/sendVerificationMail.js";
import nodemailer from "nodemailer";
import "dotenv/config";

export const sendSubscribeMail = async (email) => {
  
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
    to: email,
    subject: "Thank You for Subscribing to SoYummy Newsletter!",
    text: `  SoYummy Newsletter!
    Dear Subscriber,
    Thank you for subscribing to SoYummy's newsletter! We are thrilled to have you on board. Get ready to indulge in a world of delightful recipes, culinary tips, and exclusive offers delivered right to your inbox.
    Stay tuned for mouthwatering updates and exciting culinary adventures!
    Warm regards,
    The SoYummy Team`,
    html: `
      <h2>SoYummy Newsletter!<h2>
      <h4>Dear Subscriber,</h4>
      <p>Thank you for subscribing to SoYummy's newsletter! We are thrilled to have you on board. Get ready to indulge in a world of delightful recipes, culinary tips, and exclusive offers delivered right to your inbox.</p>
      <p>Stay tuned for mouthwatering updates and exciting culinary adventures!</p>
      <p>Warm regards,</p>
      <p>The SoYummy Team</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
