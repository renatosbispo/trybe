const router = require('express').Router();
const middlewares = require('../middlewares');

router.get('/me', middlewares.auth, (req, res) => {
  const { userInfo } = req;

  res.status(200).json(userInfo);
});

module.exports = router;
