const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {type: String, required: true, max: [128, 'Too Long. Max is 128 chars.']},
  category: {type: String, required: false, lowercase: true},
  description: {type: String, required: true},
  color: {type: String, required: false},
  price: {type: Number, required: true},
  image: {type: String, required: false},
  new: {type: Boolean, required: true},
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Item', itemSchema);
