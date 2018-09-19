const Product = require('../models/Product');

exports.all = async () => Product.find({}).populate('type');

exports.create = async (args) => product.create(args);
