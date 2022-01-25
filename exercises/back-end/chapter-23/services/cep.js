const cepModel = require('../models/cep');

async function getCepData(cep) {
  const cepData = await cepModel.getCepData(cep);

  if (cepData.length === 0) {
    return null;
  }

  return cepData;
}

module.exports = {
  getCepData,
}
