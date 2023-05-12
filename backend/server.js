import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 4001;
const app = express();
app.use(express.json());
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to MongoDB");

app.get("*", (req, res) => res.send("<h1>Hello World</h1>"));
