import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { userRouter } from "./routes/userRouter.js";

dotenv.config();

const PORT = process.env.PORT || 4001;
const app = express();
app.use(express.json());
app.use(
  session({
    // change to environment variable
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to MongoDB");
app.use(express.static(path.join(path.resolve(), "frontend/dist")));
app.use("/api/user", userRouter);

app.get("*", (req, res) =>
  res.sendFile(path.join(path.resolve(), "frontend/dist/index.html"))
);
