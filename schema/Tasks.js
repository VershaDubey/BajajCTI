const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  due: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // refers to the "users" collection
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
