const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true },
  product: { type: String, required: true, enum: ['A', 'B', 'C'] },
});

module.exports = mongoose.model('Lead', leadSchema);
