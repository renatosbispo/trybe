const router = require('express').Router();
const { getCepData } = require('../controllers/cep');

router.get('/:cep', getCepData);

module.exports = {
  path: '/cep',
  router,
};
