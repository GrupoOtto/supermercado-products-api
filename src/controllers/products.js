const error = require('http-errors');
const Product = require('../models/Product');

exports.all = async (args) => Product.find(args).populate('type');

exports.get = async _id => Product.findById({ _id }).populate('type');

exports.update = async (_id, args) => Product.findOneAndUpdate({ _id }, args, {new: true});

exports.delete = async _id => Product.deleteOne({ _id });

exports.create = async args => Product.create(args);

exports.valid = async _id => {
  const product = await Product.findOne({ _id });
  if (!product) {
     throw error(404, 'Product not found');
  }
    return { valid: product.isValid() };
};

exports.buy = async _id => {
  const product = await Product.findOne({ _id });
  if (!product) {
    throw error(404, 'Coupon not found');
  }

  if (!product.isValid()) {
    throw error(410, 'Invalid product');
  }

  if (product.stock) {
    product.stock -= 1;
    await product.save();
  }
  return product;
};
