const mongoose = require('mongoose');
const DealerSchema = require('../schema/dealer');

module.exports = mongoose.model('Dealer', DealerSchema);
