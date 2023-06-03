import express from "express";

export const organizationRouter = express.Router();

organizationRouter.get("/", (req, res) => {
  res.send("Hi");
});
