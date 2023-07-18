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

salesRouter.get("/summary-by-fundraiser", isAuthenticated, async (req, res) => {
  try {
    let products = [];
    let productTypes = [];
    const sales = await SalesModel.find({
      fundraiser: req.query.fundraiser,
    }).populate({ path: "products.product", populate: "productType" });

    for (const sale of sales) {
      for (const each of sale.products) {
        const ptIndex = productTypes.findIndex(
          (pt) => pt.productType === each.product.productType
        );
        if (ptIndex === -1) {
          productTypes.push({
            productType: each.product.productType,
            totalSold: each.quantity,
          });
        }
        const index = products.findIndex((p) => p.product === each.product);
        if (index === -1) {
          products.push({
            product: each.product,
            totalSold: each.quantity,
            caseSize: each.product.productType.caseSize,
          });
        } else {
          products[index].totalSold += each.quantity;
          productTypes[ptIndex].totalSold += each.quantity;
        }
      }
    }
    for (const product of products) {
      product.fullCases = Math.floor(product.totalSold / product.caseSize);
      product.caseRemainder =
        product.totalSold - product.fullCases * product.caseSize;
    }
    for (const each of productTypes) {
      for (let i = each.productType.wholesalePrices.length - 1; i >= 0; i--) {
        if (each.totalSold >= each.productType.wholesalePrices[i].tierMin) {
          each.totalWholesaleCost =
            each.totalSold * each.productType.wholesalePrices[i].price;
          each.totalWholesaleProfit =
            each.totalSold * each.productType.sellPrice -
            each.totalWholesaleCost;
          break;
        }
      }
    }
    res.send({ productTypes, products });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
