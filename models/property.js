const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema({
  address: [String],
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  sqft: Number,
  description: String,
  thumbnail: Buffer,
  images: [Buffer],
});

const property = mongoose.model('Property', propertySchema);

module.exports = property;
