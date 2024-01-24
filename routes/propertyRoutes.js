const express = require('express');
const router = express.Router();
const Property = require('../models/property');
const mongoose = require('mongoose');

//for displaying property cards only need
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().select('-images ');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get property by id and get images.
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format!' });
  }
  try {
    const propertyImages = await Property.findById(id).select('images');
    if (!propertyImages) {
      res.status(404).json({
        message: 'Property not found...',
      });
    }
    res.json(propertyImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
