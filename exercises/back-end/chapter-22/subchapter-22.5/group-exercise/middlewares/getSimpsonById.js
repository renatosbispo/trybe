const { loadSimpsons } = require('../utils');

function getSimpsonById(req, res, next) {
  const { id } = req.params;
  const simpsons = loadSimpsons();

  const simpson = simpsons.find(({ id: simpsonId }) => parseInt(id) === simpsonId);

  if (simpson) {
    return res.status(200).json(simpson);
  }

  res.status(404).json({ message: 'Simpson not found!' });

  next();
}

module.exports = {
  getSimpsonById,
}
