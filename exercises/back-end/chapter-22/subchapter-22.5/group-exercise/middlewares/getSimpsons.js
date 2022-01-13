function getSimpsons(req, res, next) {
  const simpsons = require('../simpsons.json');
  res.status(200).send(simpsons);

  next();
}

module.exports = {
  getSimpsons,
};
