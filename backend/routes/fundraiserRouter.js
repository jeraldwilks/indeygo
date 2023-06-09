import express from 'express';
const router = express.Router();
import Fundraiser from '../models/fundraiserModel.js';

// Create a new fundraiser
router.post('/api/fundraiser', async (req, res) => {
  try {
    // Extract the form data from the request body
    const {
      organizationName,
      deliveryAddress,
      startDate,
      endDate,
      fundraiserAmount,
      expectedProfit,
      orderDate,
      deliveryDate
    } = req.body;

    // Create a new fundraiser object
    const newFundraiser = new Fundraiser({
      organizationName,
      deliveryAddress,
      startDate,
      endDate,
      fundraiserAmount,
      expectedProfit,
      orderDate,
      deliveryDate
    });

    // Save the fundraiser to the database
    const savedFundraiser = await newFundraiser.save();

    res.status(201).json(savedFundraiser);
  } catch (error) {
    console.error('Error creating fundraiser:', error);
    res.status(500).json({ error: 'Failed to create fundraiser' });
  }
});

export { router as fundraiserRouter };
