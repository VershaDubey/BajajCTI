
const mongoose = require('mongoose');
const callLogSchema = require('../schema/call_log');

const CallLog = mongoose.model('CallLog', callLogSchema);

module.exports = CallLog;
