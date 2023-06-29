import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const formRouter = express.Router();

formRouter.post("/", (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  res.send('Received JSON Data successfully');
  
  const mailDetails = {
    to: "rinijoy@ymail.com",
    from: process.env.FROM_EMAIL,
    subject: "Inquiry form:",
    text: `
    
    First Name: ${req.body.firstName || ""}\n 
    Last Name: ${req.body.lastName || ""}\n
    Email: ${req.body.email || ""}\n
    Phone Number: ${req.body.phoneNumber || ""}\n
    Organization: ${req.body.organizationName || " "}\n
    Organization Type: ${req.body.organizationType || ""}\n
    Participant Number: ${req.body.numberOfParticipants || ""}\n
    Delivery City: ${req.body.deliveryCity || ""}\n
    Comments: ${req.body.comments || ""}\n
    `
  };
  
  sgMail
    .send(mailDetails)
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error) => {
      console.error(error);
    });
});
