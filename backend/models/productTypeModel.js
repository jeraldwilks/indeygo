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
  priceTierMin: [
    {
      type: Number,
      required: true,
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
});

export const ProductTypeModel = mongoose.model(
  "ProductType",
  productTypeSchema
);
