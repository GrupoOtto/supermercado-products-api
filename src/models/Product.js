const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  costPrice: {
    type: Number,
    required: true
  },
  salePrice: {
    type: Number,
    required: true
  },
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type' }
});

ProductSchema.method({});

ProductSchema.statics = {};

module.exports = mongoose.model('Product', ProductSchema);
