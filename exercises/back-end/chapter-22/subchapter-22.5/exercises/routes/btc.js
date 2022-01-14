const express = require('express');
const router = express.Router();
const { btc: { price } } = require('../middlewares');

router.get('/price', price.validate, price.fetch);

module.exports = {
  route: '/btc',
  router,
};
