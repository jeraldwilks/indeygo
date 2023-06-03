import express from "express";

export const purchaserRouter = express.Router();

purchaserRouter.get("/", (req, res) => {
  res.send("Hi");
});
