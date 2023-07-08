import express from "express";
import { SalesModel } from "../models/salesModel.js";

export const salesRouter = express.Router();

salesRouter.get("/", async (req, res) => {
  try {
    const foundSales = await SalesModel.find(req.query);
    res.send(foundSales);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

salesRouter.post("/", async (req, res) => {
  try {
    const createdSale = await SalesModel.create(req.body);
    res.send(createdSale);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

salesRouter.patch("/", async (req, res) => {
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
