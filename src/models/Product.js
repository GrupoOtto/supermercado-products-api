const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  images: [String],
  costPrice: {
    type: Number,
    required: true
  },
  salePrice: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: false,
    default: null
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type'
  }
});

ProductSchema.method({
  isValid: function () {
    if (this.stock !== null && this.stock < 1) {
      return false;
    }
    return true;
  }
});

ProductSchema.statics = {};

module.exports = mongoose.model('Product', ProductSchema);
