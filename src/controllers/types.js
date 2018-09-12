const Type = require('../models/Type');
const status = require('http-status');

module.exports = app => {
  app.get('/types', async (req, res, next) => {
    try {
      const products = await Type.find({});
      res.status(status.OK).json(products);
    } catch (error) {
      next(error);
    }
  });
  app.post('/types', async (req, res, next) => {
    try {
      const product = await Type.create(req.body);
      res.status(status.CREATED).json(product);
    } catch (error) {
      next(error);
    }
  });
};
