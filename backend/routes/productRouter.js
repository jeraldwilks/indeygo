import express from "express";
import { ProductModel } from "../models/productModel.js";
import { FundraiserModel } from "../models/fundraiserModel.js";

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

    // for (const prodType of fundraiserData[0].productTypes) {
    //   const url = "api/product?isActive=true&productType=" + prodType._id;
    //   const productResponse = await fetch(url);
    //   const productData = await productResponse.json();

    //   for (const prod of productData) {
    //     setProducts((prevArray) => [...prevArray, prod]);
    //     setQuantities((prevArray) => [...prevArray, 0]);
    //   }
    // }
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

productRouter.patch("/", async (req, res) => {
  try {
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
