const Joi = require('joi');

exports.all = {
  query: {
    name: Joi.string(),
    costPrice: [
      Joi.number(),
      Joi.object()
        .keys({
          $gt: Joi.number(),
          $gte: Joi.number(),
          $lt: Joi.number(),
          $lte: Joi.number()
        })
        .or('$gt', '$gte', '$lt', '$lte')
    ]
  }
};

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
