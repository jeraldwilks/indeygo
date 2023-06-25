import express from "express";

export const salesRouter = express.Router();

salesRouter.get("/", (req, res) => {
  res.send("Hi");
});
