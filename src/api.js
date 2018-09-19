const status = require('http-status');
const validate = require('express-validation');
const products = require('./controllers/preducts');
const types = require('./controllers/types');
const productValidator = require('./validators/products');
const typeValidator = require('./validators/types');

const handle = fn => (req, res, next) => fn(req, res, next).catch(next);

module.exports = app => {

  app.get('/', handle(async (req, res) => {
    res.status(status.OK).json(await products.all())
  }));

  app.post('/', validate(productValidator), handle(async (req, res) => {
    const product = await products.create(req.body);
    res.status(status.CREATED).json(product);
  }));

  app.get('/types', handle(async (req, res) => {
    res.status(status.OK).json(await types.all())
  }));

  app.post('/types', validate(typeValidator), handle(async (req, res) => {
    const type = await types.create(req.body);
    res.status(status.CREATED).json(type);
  }));

}
