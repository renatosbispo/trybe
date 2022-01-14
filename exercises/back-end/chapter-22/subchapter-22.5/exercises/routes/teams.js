const express = require('express');
const router = express.Router();
const {
  teams: { all },
} = require('../middlewares');

router.get('/', all.retrieve);

router.post('/', all.validate, all.add);

module.exports = {
  route: '/teams',
  router,
};
