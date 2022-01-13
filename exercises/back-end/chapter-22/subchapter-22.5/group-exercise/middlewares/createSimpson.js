const { loadSimpsons, saveSimpsons } = require('../utils');

function createSimpson(req, res, next) {
  const { id, name } = req.body;

  const simpsons = loadSimpsons();

  saveSimpsons([...simpsons, { id, name }]);

  res.status(201).json({ message: 'Simpson criado com sucesso!' });

  next();
}

module.exports = {
  createSimpson,
}
