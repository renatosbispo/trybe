const { HttpError } = require('../helpers/error-generation');
const cepModel = require('../models/cep');
const viaCepModel = require('../models/viaCep');

async function addCepData(cepData) {
  const { cep } = cepData;
  const cepAlreadyExists = !!(await cepModel.getCepData(cep));

  if (cepAlreadyExists) {
    throw new HttpError('CEP already exists', 409);
  }

  const addedCepData = await cepModel.addCepData(cepData);

  return addedCepData;
}

async function getCepData(requestedCep) {
  const cepDataFromDb = await cepModel.getCepData(requestedCep);

  if (cepDataFromDb) {
    return cepDataFromDb;
  }

  const cepDataFromApi = await viaCepModel.fetchCepData(requestedCep);

  if (cepDataFromApi.erro) {
    throw new HttpError('CEP not found', 404);
  }

  const { cep, logradouro, bairro, localidade, uf } = cepDataFromApi;

  return await cepModel.addCepData({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });
}

module.exports = {
  addCepData,
  getCepData,
};
