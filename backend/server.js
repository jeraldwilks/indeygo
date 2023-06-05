import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { userRouter } from "./routes/userRouter.js";
import { participantRouter } from "./routes/participantRouter.js";
import { purchaserRouter } from "./routes/purchaserRouter.js";
import { organizationRouter } from "./routes/organizationRouter.js";
import { fundraiserRouter } from "./routes/fundraiserRouter.js";
import { productTypeRouter } from "./routes/productTypeRouter.js";
import { productRouter } from "./routes/productRouter.js";
import { salesRouter } from "./routes/salesRouter.js";

dotenv.config();

const PORT = process.env.PORT || 4001;
const SECRET = process.env.SECRET;
const app = express();
app.use(express.json());
app.use(
  session({
    // change to environment variable
    // secret: "keyboard cat",
    secret: SECRET,
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
app.use("/api/participant", participantRouter);
app.use("/api/purchaser", purchaserRouter);
app.use("/api/organization", organizationRouter);
app.use("/api/fundraiser", fundraiserRouter);
app.use("/api/productType", productTypeRouter);
app.use("/api/product", productRouter);
app.use("/api/sales", salesRouter);

app.get("*", (req, res) =>
  res.sendFile(path.join(path.resolve(), "frontend/dist/index.html"))
);
