const mongoose = require('mongoose');
const appointmentSchema = require('../schema/appointment');

module.exports = mongoose.model('Appointment', appointmentSchema);