const express = require('express');
const router = express.Router();
const {
  posts: { single, all },
} = require('../middlewares');

router.get('/', all.retrieve);

router.get('/:id', single.exists, single.retrieve);

router.use((_, res) => {
  res.status(404).json({ message: "Whoops! There's nothing here..." });
});

module.exports = {
  route: '/posts',
  router,
};
