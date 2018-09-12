const Type = require('../models/Type');
const Product = require('../models/Product');
const status = require('http-status');

module.exports = app => {
  app.get('/', async (req, res, next) => {
    try {
      const products = await Product.find({}, '-__v').populate('type');
      res.status(status.OK).json(products);
    } catch (error) {
      next(error);
    }
  });
  app.post('/', async (req, res, next) => {
    try {
      const product = await Product.create(req.body);
      res.status(status.CREATED).json(product);
    } catch (error) {
      next(error);
    }
  });
};
