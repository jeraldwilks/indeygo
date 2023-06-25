import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
  fundraiser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fundraiser",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
});

export const ParticipantModel = mongoose.model(
  "Participant",
  participantSchema
);
