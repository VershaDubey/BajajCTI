const mongoose = require('mongoose');
const dealershipSchema = require('../schema/dealership');

module.exports = mongoose.model('Dealership', dealershipSchema);
