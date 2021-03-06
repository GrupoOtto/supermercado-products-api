const status = require('http-status');
const products = require('./controllers/products');
const types = require('./controllers/types');
const productValidator = require('./validators/products');
const typeValidator = require('./validators/types');

const handle = fn => (req, res, next) => fn(req, res, next).catch(next);

module.exports = app => {
  const resource = require('./utils/resource')(app);

  app.get('/:id/valid', handle(async (req, res) => {
    const { id } = req.params;
    res.status(status.OK).json(await products.valid(id));
  }));

  app.post('/:id/buy', handle(async (req, res) => {
      const { id } = req.params;
      res.status(status.OK).json(await products.buy(id));
  }));

  resource('/types', types, typeValidator);
  resource('/', products, productValidator);
};
