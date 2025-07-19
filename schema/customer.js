const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  whatsapp_opt_in: { type: Boolean, default: false },
  lead_status: { type: String, enum: ['Hot', 'Warm', 'Cold'], required: true },
  service_type: { type: String, required: true },
  last_service_date: { type: Date }
}, { timestamps: true });

module.exports = customerSchema;
