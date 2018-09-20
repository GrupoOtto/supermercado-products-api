const products = require('./controllers/products');
const types = require('./controllers/types');
const productValidator = require('./validators/products');
const typeValidator = require('./validators/types');

const handle = fn => (req, res, next) => fn(req, res, next).catch(next);

module.exports = app => {

  const resource = require('./utils/resource')(app);

  resource('/types', types, typeValidator);
  resource('/', products, productValidator);

}
