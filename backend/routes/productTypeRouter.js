import express from "express";

export const productTypeRouter = express.Router();

productTypeRouter.get("/", (req, res) => {
  res.send("Hi");
});
