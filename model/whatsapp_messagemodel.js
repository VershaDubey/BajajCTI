const mongoose = require('mongoose');
const whatsappMessageSchema = require('../schema/whatsapp_message');

module.exports = mongoose.model('WhatsAppMessage', whatsappMessageSchema);
