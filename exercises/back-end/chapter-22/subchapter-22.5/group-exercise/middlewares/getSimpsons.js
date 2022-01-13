const { loadSimpsons } = require('../utils');

function getSimpsons(req, res) {
  const simpsons = loadSimpsons();
  res.status(200).json(simpsons);
}

module.exports = getSimpsons;
