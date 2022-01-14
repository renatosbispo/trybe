const express = require('express');
const router = express.Router();
const {
  user: { signup, login },
} = require('../middlewares');

router.post('/signup', signup.validate, signup.complete);

router.post('/login', login.validate, login.complete);

module.exports = {
  route: '/user',
  router,
};
