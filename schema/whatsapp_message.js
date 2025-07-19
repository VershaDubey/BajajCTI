
const mongoose = require('mongoose');

const WhatsAppMessageSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: false,
  },
  template_name: {
    type: String,
    required: true,
  },
  sent_at: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Sent', 'Delivered', 'Seen', 'Failed'],
    default: 'Sent',
  },
  link_clicked: {
    type: Boolean,
    default: false,
  }
});

module.exports = WhatsAppMessageSchema;

