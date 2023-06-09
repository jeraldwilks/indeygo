import mongoose from 'mongoose';

const fundraiserSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  deliveryDate: {
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

export default Fundraiser;
