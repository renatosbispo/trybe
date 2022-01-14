const { loadSimpsons } = require('../utils');

function validateIdSimpson(req, res, next) {
  const { id } = req.body;
  const simpsons = loadSimpsons();

  if (simpsons.some(({ id: simpsonId }) => id === simpsonId)) {
    return res
      .status(500)
      .json({ message: 'Não é possível cadastrar esse simpson!' });
  }

  next();
}

module.exports = validateIdSimpson;
