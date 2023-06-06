const mongoose = require('mongoose');

const ClothingSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  purchasedFrom: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.models.Clothing || mongoose.model('Clothing', ClothingSchema);
