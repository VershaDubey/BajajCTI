const mongoose = require('mongoose');
const customerSchema = require('../schema/customer');

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
