import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: `${process.env.NEXT_APP_EMAIL}`,
    pass: `${process.env.NEXT_APP_EMAIL_PASSWORD}`,
  },
});

export default transporter;
