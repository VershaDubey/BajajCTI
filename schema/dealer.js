const mongoose = require('mongoose');

const DealerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dealerCode: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    city:{
        type: String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    country:{
    type: String,
    required: true
    },
    pincode:{
        type:String,
        required:true,
    },
    textarea:{
type:String,
required:true,
  }
},
  location: {
    lat: {
      type: Number,
      required: true
    },
    long: {
      type: Number,
      required: true
    }
  }

}, { timestamps: true });

module.exports = DealerSchema;
