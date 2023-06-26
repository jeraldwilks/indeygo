import mongoose from "mongoose";

const FundraiserSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  productTypes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductType",
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
  deliveryAddress: {
    type: String,
    required: true,
  },
  deliveryCity: {
    type: String,
    required: true,
  },
  deliveryProvince: {
    type: String,
    required: true,
  },
  deliveryPostalCode: {
    type: String,
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

export const FundraiserModel = mongoose.model("Fundraiser", FundraiserSchema);
