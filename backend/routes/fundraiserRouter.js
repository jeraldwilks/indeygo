import express from "express";
import { FundraiserModel } from "../models/fundraiserModel.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const fundraiserRouter = express.Router();

fundraiserRouter.get("/", isAuthenticated, async (req, res) => {
  try {
    let searchQuery = req.query;
    searchQuery.user = req.user._id;
    // console.log(req.query);
    const foundFundraisers = await FundraiserModel.find(req.query)
      .populate("productTypes")
      .populate("organization");
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

fundraiserRouter.patch("/", isAuthenticated, async (req, res) => {
  try {
    const fundraiserId = req.body._id;
    delete req.body._id;

    await FundraiserModel.findByIdAndUpdate(fundraiserId, req.body);
    const updatedSale = await FundraiserModel.findById(fundraiserId);
    res.send(updatedSale);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
