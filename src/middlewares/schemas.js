const Joi = require('joi');

const validateName = Joi.string().min(8);
const validatePassword = Joi.string().min(6);

module.exports = {
  validateName,
  validatePassword,
};