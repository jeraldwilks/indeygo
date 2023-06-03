import mongoose from "mongoose";

const fundraiserSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productTypes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductTypes",
      required: true,
    },
  ],
  numberOfParticipants: {
    type: Number,
    required: true,
  },
  fundraiserTarget: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  fundsRaised: {
    type: Number,
  },
});

export const fundraiserModel = mongoose.model("Fundraiser", fundraiserSchema);
