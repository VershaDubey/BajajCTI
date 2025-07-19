const mongoose = require('mongoose');

const dealershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  outbound_number: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = dealershipSchema;
