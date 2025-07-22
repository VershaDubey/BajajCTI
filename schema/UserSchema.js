const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ['admin', 'dealer', 'cre'],
    default: 'cre'
  },

  lastLogin: {
    type: Date,
    default: null
  }

}, { timestamps: true }); // adds createdAt and updatedAt

module.exports = UserSchema;
