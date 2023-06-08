const mongoose = require('mongoose');

const fundraiserSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  fundraiserAmount: {
    type: Number,
    required: true
  },
  expectedProfit: {
    type: Number,
    required: true
  }
});

const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);

module.exports = Fundraiser;
