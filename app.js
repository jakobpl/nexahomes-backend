const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/propertyRoutes');
const Property = require('./models/property');
const fs = require('fs');
//import images
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/properties', propertyRoutes);
//moongodb setup
const mongoDBUri =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/nexahomes';
mongoose
  .connect(mongoDBUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
