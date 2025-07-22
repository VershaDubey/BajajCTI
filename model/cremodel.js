const mongoose = require('mongoose');
const CRESchema = require('../schema/cre');

module.exports = mongoose.model('CRE', CRESchema);
