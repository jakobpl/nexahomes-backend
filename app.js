const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/propertyRoutes');
const Property = require('./models/property');
const fs = require('fs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
//import images
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.disable('x-powered-by');
app.use(hpp());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

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
