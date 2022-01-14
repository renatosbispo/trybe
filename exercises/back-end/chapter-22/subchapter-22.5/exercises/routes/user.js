const express = require('express');
const router = express.Router();
const {
  user: { signup },
} = require('../middlewares');

router.post('/signup', signup.validate, signup.complete);

router.post('/login');

module.exports = {
  route: '/user',
  router,
};
