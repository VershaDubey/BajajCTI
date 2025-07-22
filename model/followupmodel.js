const mongoose = require('mongoose');
const followupSchema = require('../schema/followUp');

module.exports = mongoose.model('FollowUp', followupSchema);
