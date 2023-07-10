import express from "express";
import { ProductModel } from "../models/productModel.js";
import { FundraiserModel } from "../models/fundraiserModel.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

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

productRouter.get("/findByFundraiser", async (req, res) => {
  try {
    const productArray = [];
    const fundraiser = await FundraiserModel.findById(req.query.fundraiser);
    const productTypes = fundraiser.productTypes;
    for (const productType of productTypes) {
      const products = await ProductModel.find({
        productType: productType._id,
        isActive: true,
      }).populate("productType");
      for (const product of products) {
        productArray.push(product);
      }
    }

    res.send(productArray);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

productRouter.post("/", isAuthenticated, async (req, res) => {
  try {
    if (req.user.isAdmin === false) {
      throw new Error("Not Authorized");
    }
    const createdProduct = await ProductModel.create(req.body);
    res.send(createdProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

productRouter.patch("/", isAuthenticated, async (req, res) => {
  try {
    if (req.user.isAdmin === false) {
      throw new Error("Not Authorized");
    }
    const productId = req.body._id;
    delete req.body._id;

    await ProductModel.findByIdAndUpdate(productId, req.body);
    const updatedProduct = await ProductModel.findById(productId);
    res.send(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
