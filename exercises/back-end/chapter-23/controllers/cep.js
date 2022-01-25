const cepService = require('../services/cep');

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
  getCepData,
};
