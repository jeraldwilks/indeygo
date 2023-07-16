import mongoose from "mongoose";

const productTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  caseSize: {
    type: Number,
    required: true,
  },
  quantityDesc: {
    type: String,
    required: false,
  },
  wholesalePrices: [
    {
      tierMin: {
        type: Number,
      },
      price: {
        type: Number,
      },
    },
  ],
  sellPrice: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export const ProductTypeModel = mongoose.model(
  "ProductType",
  productTypeSchema
);
