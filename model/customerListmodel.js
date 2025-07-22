const mongoose = require('mongoose');
const CustomerListSchema = require('../schema/customerlist');

module.exports = mongoose.model('CustomerList', CustomerListSchema);
