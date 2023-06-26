import express from "express";
import { FundraiserModel } from "../models/fundraiserModel.js";

export const fundraiserRouter = express.Router();

fundraiserRouter.get("/", async (req, res) => {
  try {
    const foundFundraisers = await FundraiserModel.find(req.query).populate(
      "productTypes"
    );
    res.send(foundFundraisers);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

fundraiserRouter.post("/", async (req, res) => {
  try {
    const createdFundraiser = await FundraiserModel.create(req.body);
    res.send(createdFundraiser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
