import express from "express";

export const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send("Hi");
});
