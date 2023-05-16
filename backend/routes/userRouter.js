import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import { verifyPassword, createUser } from "../models/userModel.js";

export const userRouter = express.Router();

passport.use(
  new LocalStrategy(async function (email, password, done) {
    const user = await verifyPassword(email, password);
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
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

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("authenticated", req.user);
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut((err) => {
    if (!err) res.sendStatus(200);
  });
});

router.get("/", (req, res) => {
  if (req.user) res.send(req.user);
  else res.sendStatus(401);
});

router.post("/", async (req, res) => {
  try {
    const createdUser = createUser(req.body);
    res.send(createdUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
