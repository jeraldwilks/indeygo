import express from "express";
import { ProductTypeModel } from "../models/productTypeModel.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { FundraiserModel } from "../models/fundraiserModel.js";
import { SalesModel } from "../models/salesModel.js";

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

productTypeRouter.get(
  "/summary-by-fundraiser",
  isAuthenticated,
  async (req, res) => {
    try {
      // const fundraiser = await FundraiserModel.findById(
      //   req.query.fundraiser
      // ).populate("productTypes");
      // const productTypes = fundraiser.productTypes;
      let products = [];
      let productTypes = [];
      // for (const productType of productTypes) {
      //   productType.totalSales = 0;
      // }

      const sales = await SalesModel.find({
        fundraiser: req.query.fundraiser,
      }).populate({ path: "products.product", populate: "productType" });
      for (const sale of sales) {
        for (const each of sale.products) {
          const ptIndex = productTypes.findIndex(
            (pt) => pt._id === each.product.productType._id
          );
          if (ptIndex === -1) {
            productTypes.push({
              productType: each.product.productType,
              totalSales: each.quantity,
            });
          }
          // console.log(ptIndex);
          const index = products.findIndex((p) => p.product === each.product);
          if (index === -1) {
            products.push({
              product: each.product,
              totalSold: each.quantity,
              caseSize: each.product.productType.caseSize,
            });
          } else {
            products[index].totalSold += each.quantity;
          }
        }
      }
      for (const product of products) {
        product.fullCases = Math.floor(product.totalSold / product.caseSize);
        product.caseRemainder =
          product.totalSold - product.fullCases * product.caseSize;
      }
      console.log(productTypes);
      res.send("hi");
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  }
);

productTypeRouter.post("/", isAuthenticated, async (req, res) => {
  try {
    if (req.user.isAdmin === false) {
      throw new Error("Not Authorized");
    }
    const createdProductType = await ProductTypeModel.create(req.body);
    res.send(createdProductType);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

productTypeRouter.patch("/", isAuthenticated, async (req, res) => {
  try {
    if (req.user.isAdmin === false) {
      throw new Error("Not Authorized");
    }
    const productId = req.body._id;
    delete req.body._id;
    await ProductTypeModel.findByIdAndUpdate(productId, req.body);
    const updatedProductType = await ProductTypeModel.findById(productId);
    res.send(updatedProductType);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
