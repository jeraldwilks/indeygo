import express from "express";
import { fundraiserModel } from "../models/fundraiserModel.js";

export const fundraiserRouter = express.Router();

fundraiserRouter.get("/", async (req, res) => {
  try {
    const foundFundraisers = await fundraiserModel.find(req.query);
    res.send(foundFundraisers);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

fundraiserRouter.post("/", async (req, res) => {
  try {
    const createdFundraiser = await fundraiserModel.create(req.body);
    res.send(createdFundraiser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
