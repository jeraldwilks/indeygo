import express from "express";
import { FundraiserModel } from "../models/fundraiserModel.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const fundraiserRouter = express.Router();

fundraiserRouter.get("/", isAuthenticated, async (req, res) => {
  try {
    let searchQuery = req.query;
    searchQuery.user = req.user._id;
    const foundFundraisers = await FundraiserModel.find(searchQuery).populate(
      "productTypes"
    );
    res.send(foundFundraisers);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

fundraiserRouter.post("/", isAuthenticated, async (req, res) => {
  try {
    let query = req.body;
    query.user = req.user._id;
    const createdFundraiser = await FundraiserModel.create(query);
    res.send(createdFundraiser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
