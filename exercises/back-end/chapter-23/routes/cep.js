const router = require('express').Router();
const { addCepData , getCepData } = require('../controllers/cep');
const { formatCep, validateCep, validateCepData } = require('../middlewares/cep');

router
  .post('/', validateCepData, addCepData)
  .get('/:cep', validateCep, formatCep, getCepData);

module.exports = {
  path: '/cep',
  router,
};
