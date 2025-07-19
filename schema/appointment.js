const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  appointment_date: {
    type: Date,
    required: true
  },
  service_type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Booked', 'Completed', 'No-show'],
    default: 'Booked'
  }
}, { timestamps: true });

module.exports = appointmentSchema;
