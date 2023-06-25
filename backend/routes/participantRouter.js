import express from "express";

export const participantRouter = express.Router();

participantRouter.get("/", (req, res) => {
  res.send("Hi");
});
