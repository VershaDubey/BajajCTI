const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['admin', 'dealer', 'cre'],
    required: true
  }
}, { timestamps: true });

module.exports = RoleSchema;
