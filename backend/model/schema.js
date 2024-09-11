// models/schema.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  username: String,
  phone: String,
  address: String,
});

const OnlineShopping = mongoose.model('OnlineShopping', studentSchema);

module.exports = OnlineShopping;


