import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import { verifyPassword, createUser } from "../models/userModel.js";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import { UserModel } from "../models/userModel.js";
import bcrypt from "bcrypt";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const userRouter = express.Router();

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async function (email, password, done) {
      const user = await verifyPassword(email, password);
      if (!user) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

userRouter.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("authenticated", req.user);
  res.send(req.user);
});

userRouter.post("/logout", (req, res) => {
  req.logOut((err) => {
    if (!err) res.sendStatus(200);
  });
});

userRouter.get("/", (req, res) => {
  if (req.user) res.send(req.user);
  else res.sendStatus(401);
});

userRouter.post("/", async (req, res) => {
  try {
    const createdUser = await createUser(req.body);
    res.send(createdUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

userRouter.post("/forgotpassword", async (req, res) => {
  console.log("Here");
  let user = await UserModel.findOne({ email: req.body.email });

  if (!user)
    return res.status(401).json({
      message:
        "The email address " +
        req.body.email +
        " is not associated with any account. Double-check your email address and try again.",
    });

  //Generate and set password reset token
  user.generatePasswordReset();

  // Save the updated user object
  user
    .save()
    .then((user) => {
      // send email

      //comment out below line before production
      req.headers.host = "localhost:5555";
      let link =
        "http://" +
        req.headers.host +
        "/ResetPassword/" +
        user.resetPasswordToken;
      const mailOptions = {
        to: user.email,
        from: process.env.FROM_EMAIL,
        subject: "Password change request",
        text: `Hi ${user.firstName} \n 
                    Please click on the following link ${link} to reset your password. \n\n 
                    If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };

      sgMail.send(mailOptions, (error, result) => {
        if (error) return res.status(500).json({ message: error.message });

        res.status(200).json({
          message: "A reset email has been sent to " + user.email + ".",
        });
      });
    })
    .catch((err) => res.status(500).json({ message: err.message }))

    .catch((err) => res.status(500).json({ message: err.message }));
});

userRouter.post("/resetpassword", async (req, res) => {
  let user = await UserModel.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user)
    return res
      .status(401)
      .json({ message: "Password reset token is invalid or has expired." });

  //Set the new password
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  // Save
  user.save((err) => {
    if (err) return res.status(500).json({ message: err.message });

    // send email
    const mailOptions = {
      to: user.email,
      from: process.env.FROM_EMAIL,
      subject: "Your password has been changed",
      text: `Hi ${user.firstName} \n 
              This is a confirmation that the password for your account ${user.email} has just been changed.\n`,
    };

    sgMail.send(mailOptions, (error, result) => {
      if (error) return res.status(500).json({ message: error.message });

      res.status(200).json({ message: "Your password has been updated." });
    });
  });
});

// const msg = {
//   to: "jerald@wilks.pro", // Change to your recipient
//   from: "jerald@wilks.pro", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });
