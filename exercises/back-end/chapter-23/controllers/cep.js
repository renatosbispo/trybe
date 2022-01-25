const cepService = require('../services/cep');

async function addCepData(req, res, next) {
  try {
    const cepData = req.body;

    const addedCepData = await cepService.addCepData(cepData);

    res.status(201).json(addedCepData);
  } catch (error) {
    next(error);
  }
}

async function getCepData(req, res, next) {
  try {
    const { cep } = req.params;

    const cepData = await cepService.getCepData(cep);

    res.status(200).json(cepData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addCepData,
  getCepData,
};
