const Joi = require('joi');

const schema = {
  initials: Joi.string().required(),
  description: Joi.string().required(),
};

module.exports = {
  body: schema
}
