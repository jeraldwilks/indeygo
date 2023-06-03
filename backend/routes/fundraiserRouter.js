import express from "express";

export const fundraiserRouter = express.Router();

fundraiserRouter.get("/", (req, res) => {
  res.send("Hi");
});
