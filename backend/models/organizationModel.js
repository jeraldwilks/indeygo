import mongoose from "mongoose";

const organizationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  groupType: {
    type: String,
    required: true,
    enum: ["Sports", "School", "Community", "Youth"],
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
});

export const OrganizationModel = mongoose.model(
  "Organization",
  organizationSchema
);
