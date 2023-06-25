import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductType",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  wholesalePrices: [
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

export const ProductModel = mongoose.model("Product", productSchema);
