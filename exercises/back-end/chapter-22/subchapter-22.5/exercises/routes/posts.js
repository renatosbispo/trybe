const express = require('express');
const router = express.Router();
const { posts: { single } } = require('../middlewares');

router.get('/');

router.get('/:id', single.exists, single.retrieve);

module.exports = {
  route: '/posts',
  router
};
