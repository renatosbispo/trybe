const fs = require('fs');

function createSimpson(req, res, next) {
  const { id, name } = req.body;

  const simpsonsJson = fs.readFileSync('simpsons.json', 'utf8');
  const simpsons = JSON.parse(simpsonsJson);

  simpsons.push({ id, name });

  fs.writeFileSync('simpsons.json', JSON.stringify(simpsons));

  res.status(201).json({ message: 'Simpson criado com sucesso!' });

  next();
}

module.exports = {
  createSimpson,
}
