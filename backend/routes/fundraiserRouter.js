const express = require('express');
const router = express.Router();
const Fundraiser = require('../models/fundraiserModel');

// Create a new fundraiser
router.post('/', async (req, res) => {
  try {
    // Extract the form data from the request body
    const {
      organizationName,
      deliveryAddress,
      startDate,
      endDate,
      fundraiserAmount,
      expectedProfit
    } = req.body;

    // Create a new fundraiser object
    const newFundraiser = new Fundraiser({
      organizationName,
      deliveryAddress,
      startDate,
      endDate,
      fundraiserAmount,
      expectedProfit
    });

    // Save the fundraiser to the database
    const savedFundraiser = await newFundraiser.save();

    res.status(201).json(savedFundraiser);
  } catch (error) {
    console.error('Error creating fundraiser:', error);
    res.status(500).json({ error: 'Failed to create fundraiser' });
  }
});

module.exports = router;
