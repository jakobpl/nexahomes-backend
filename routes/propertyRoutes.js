const express = require('express');
const router = express.Router();
const Property = require('../models/property');
const mongoose = require('mongoose');

//for displaying property cards only need
// ADDRESS, THUMBNAIL, SQFT, BEDROOM COUNT, BATHROOM COUNT,PRICE
//display 6 properties on the home page
router.get('/', async (req, res) => {
  try {
    // const properties = await Property.find().limit(6); //production
    console.log('GET request incoming....');
    const properties = await Property.find().select('-images '); //test
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get all properties
router.get('/listings', async (req, res) => {
  try {
    //
    // res.json({ message: 'sent to api/properties/listings' });
    // return;
    //
    const properties = await Property.find().select('-images');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get property by id and get images.
router.get('/:id', async (req, res) => {
  //check if id is valid
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format!' });
  }
  try {
    //
    // res.json({ message: 'sent to api/properties/id' });
    // return;
    //
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
