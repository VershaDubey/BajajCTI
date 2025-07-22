const mongoose = require('mongoose');

const followupSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    required: true // e.g., call, visit
  },
  remark: {
    type: String
  }
}, { timestamps: true });

module.exports = followupSchema;
