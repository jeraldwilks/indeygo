import express from "express";
import { ProductTypeModel } from "../models/productTypeModel.js";

export const productTypeRouter = express.Router();

productTypeRouter.get("/", async (req, res) => {
  try {
    const foundTypes = await ProductTypeModel.find(req.query);
    res.send(foundTypes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

productTypeRouter.post("/", async (req, res) => {
  try {
    const createdProductType = await ProductTypeModel.create(req.body);
    res.send(createdProductType);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

//Patch request for product type router

productTypeRouter.patch("/", async (req, res) => {
  try {
    const productId = req.body._id;
    delete req.body._id;
    const updateProductType = await ProductTypeModel.findByIdAndUpdate(productId,req.body);
   
//  console.log(updateProductType);
    res.send(updateProductType);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
