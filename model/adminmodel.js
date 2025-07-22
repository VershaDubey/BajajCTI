const mongoose = require('mongoose');
const AdminSchema = require('../schema/admin');

module.exports = mongoose.model('Admin', AdminSchema);
