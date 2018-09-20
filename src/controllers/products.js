const Product = require('../models/Product');

exports.all = async () => Product.find({}).populate('type');

exports.get = async _id => Product.findById({ _id }).populate('type');

exports.update = async (_id, args) => Product.findOneAndUpdate({ _id }, args);

exports.delete = async _id => Product.deleteOne({ _id });

exports.create = async args => Product.create(args);
