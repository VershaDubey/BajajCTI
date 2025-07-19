
const mongoose = require('mongoose');

const callLogSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  call_time: {
    type: Date,
    required: false
  },
  duration: {
    type: String
  },
  notes: {
    type: String
  }
}, { timestamps: true });

module.exports = callLogSchema;
