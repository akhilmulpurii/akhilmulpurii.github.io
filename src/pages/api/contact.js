import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const emailTemplate = ({ name, email, message, organization, services }) => {
  return `
  <div style="background: #030d03;color:#fff;box-sizing: border-box;padding: 20px;margin: 0px !important;">
    <h1>Message from ${name}</h1>
    <p>Sender's Email: ${email}</p>
    <p>Organization: ${organization}</p>
    <p>Services Requested: ${services}</p>
    <p>Message: ${message}</p>
  </div> 
  `;
};

export default async function (req, res) {
  try {
    const {
      name = "",
      email = "",
      message = "",
      organization = "",
      services = "",
    } = req.body;

    const oauth2Client = new OAuth2(
      process.env.OAUTH_CLIENT_ID,
      process.env.OAUTH_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log(err);
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USERNAME,
        accessToken,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    await transporter.sendMail({
      subject: "Ding Dong! A message from your website",
      to: "mulpuriakhil@icloud.com",
      from: process.env.GMAIL_USERNAME,
      html: emailTemplate({ name, email, message, organization, services }),
    });

    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
