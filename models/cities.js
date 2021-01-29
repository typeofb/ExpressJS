const mongoose = require('mongoose');

const cities = new mongoose.Schema({
  name: String,
  country: String,
  timezone: String,
  population: Number,
  location: {
    longitude: { type: Number },
    latitude: { type: Number }
  }
});

module.exports = mongoose.model('cities', cities);