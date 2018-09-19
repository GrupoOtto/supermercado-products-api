const Joi = require('joi');

module.exports = {
  body: {
    name: Joi.string().required(),
    costPrice: Joi.number().required(),
    salePrice: Joi.number().required(),
    type: Joi.string().hex().required()
  }
}
