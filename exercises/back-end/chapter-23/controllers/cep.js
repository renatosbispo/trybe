const cepService = require('../services/cep');

async function getCepData(req, res) {
  const { cep } = req.params;
  const cepData = await cepService.getCepData(cep);

  if (!cepData) {
    return res
      .status(400)
      .json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  }

  res.status(200).json(cepData);
}

module.exports = {
  getCepData,
};
