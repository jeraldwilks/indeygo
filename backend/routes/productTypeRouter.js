import express from "express";
import { ProductTypeModel } from "../models/productTypeModel.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

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
    const updateProductType = await ProductTypeModel.findByIdAndUpdate(
      productId,
      req.body
    );
    res.send(updateProductType);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
