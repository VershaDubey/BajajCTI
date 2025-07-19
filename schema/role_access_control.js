const mongoose = require('mongoose');

const roleAccessControlSchema = new mongoose.Schema({
  role: {
    type: String,
    required: false
  },
  object_name: {
    type: String,
    required: true
  },
  can_view: {
    type: Boolean,
    default: false
  },
  can_create: {
    type: Boolean,
    default: false
  },
  can_edit: {
    type: Boolean,
    default: false
  },
  can_delete: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = roleAccessControlSchema;
