import express from "express";
import { ProductModel } from "../models/productModel.js";

export const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const foundProducts = await ProductModel.find(req.query);
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

// Added to edit product details
productRouter.patch("/", async (req, res) => {
  try {
    const productId = req.body._id;
    delete req.body._id;
    
    const updatedProduct = await ProductModel.findByIdAndUpdate(productId,req.body,{new: true });
    res.send(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
