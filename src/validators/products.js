const Joi = require('joi');

exports.all = {};

exports.create = {
  body: {
    name: Joi.string().required(),
    costPrice: Joi.number().required(),
    salePrice: Joi.number().required(),
    type: Joi.string()
      .hex()
      .required()
  }
};

exports.get = {};

exports.update = {
  body: {
    name: Joi.string().required(),
    costPrice: Joi.number().required(),
    salePrice: Joi.number().required(),
    type: Joi.string()
      .hex()
      .required()
  }
};

exports.delete = {};
