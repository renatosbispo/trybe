const Joi = require('joi');
const { HttpError } = require('../helpers/error-generation');

function formatCep(req, _, next) {
  const { cep } = req.params;

  if (!cep.includes('-')) {
    const formatedCep = cep.split(/([0-9]{3})$/, 2).join('-');
    req.params.cep = formatedCep;
  }

  next();
}

function validateCep(req, _, next) {
  const { cep } = req.params;
  const schema = Joi.string().pattern(/^[0-9]{5}-?[0-9]{3}$/);
  const { error } = schema.validate(cep);

  if (error) {
    const { message } = error.details[0];

    return next(new HttpError(message, 400));
  }

  next();
}

function validateCepData(req, _, next) {
  const cepData = req.body;

  const schema = Joi.object({
    cep: Joi.string()
      .pattern(/^[0-9]{5}-[0-9]{3}$/)
      .required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().required(),
  });

  const { error } = schema.validate(cepData);

  if (error) {
    const { message } = error.details[0];

    return next(new HttpError(message, 400));
  }

  next();
}

module.exports = {
  formatCep,
  validateCep,
  validateCepData,
};
