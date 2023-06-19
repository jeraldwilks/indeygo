import express from "express";
import { ProductModel } from "../models/productModel.js";

export const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const foundProducts = await ProductModel.find(req.body);
    res.send(foundProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

productRouter.post("/", async (req, res) => {
  try {
    const createdProduct = await ProductModel.create(req.body);
    res.send(createdProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
