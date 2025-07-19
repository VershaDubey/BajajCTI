const mongoose = require('mongoose');
const taskSchema = require('../schema/Tasks');

module.exports = mongoose.model('Task', taskSchema);
