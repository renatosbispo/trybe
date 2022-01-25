const { default: axios } = require('axios');
const { addContextToErrorMessageAndRethrow } = require('../helpers/error-generation');
const connection = require('./connection');

async function fetchCepData(cep) {
  try {
    const apiEndpoint = `https://viacep.com.br/ws/${cep}/json`;
    const { data } = await axios.get(apiEndpoint);

    return data;
  } catch (error) {
    addContextToErrorMessageAndRethrow(error, 'ViaCEP API');
  }
}

module.exports = {
  fetchCepData,
};
