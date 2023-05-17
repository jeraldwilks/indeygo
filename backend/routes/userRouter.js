import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import { verifyPassword, createUser } from "../models/userModel.js";

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
