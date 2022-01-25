const { HttpError } = require('../helpers/error-generation');
const cepModel = require('../models/cep');

async function getCepData(cep) {
  const cepData = await cepModel.getCepData(cep);

  if (!cepData) {
    throw new HttpError('CEP not found', 404);
  }

  return cepData;
}

module.exports = {
  getCepData,
}
