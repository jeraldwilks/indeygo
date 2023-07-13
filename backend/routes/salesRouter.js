import express from "express";
import { SalesModel } from "../models/salesModel.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const salesRouter = express.Router();

salesRouter.get("/", isAuthenticated, async (req, res) => {
  try {
    let query = req.query;
    query.user = req.user._id;
    const foundSales = await SalesModel.find(query);
    res.send(foundSales);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

salesRouter.post("/", isAuthenticated, async (req, res) => {
  try {
    const newData = req.body;
    newData.user = req.user._id;
    const createdSale = await SalesModel.create(newData);
    res.send(createdSale);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

salesRouter.patch("/", isAuthenticated, async (req, res) => {
  try {
    const saleId = req.body._id;
    delete req.body._id;
    await SalesModel.findByIdAndUpdate(saleId, req.body);
    const updatedSale = await SalesModel.findById(saleId);
    res.send(updatedSale);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
