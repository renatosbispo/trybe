const { HttpError } = require('../helpers/error-generation');
const cepModel = require('../models/cep');

async function addCepData(cepData) {
  const { cep } = cepData;
  const cepAlreadyExists = !!await cepModel.getCepData(cep);

  if (cepAlreadyExists) {
    throw new HttpError('CEP already exists', 409);
  }

  const addedCepData = await cepModel.addCepData(cepData);

  return addedCepData;
}

async function getCepData(cep) {
  const cepData = await cepModel.getCepData(cep);

  if (!cepData) {
    throw new HttpError('CEP not found', 404);
  }

  return cepData;
}

module.exports = {
  addCepData,
  getCepData,
}
