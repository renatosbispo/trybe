const fs = require('fs');

function getSimpsonById(req, res, next) {
  const { id } = req.params;
  const simpsonsJson = fs.readFileSync('simpsons.json', 'utf8');
  const simpsons = JSON.parse(simpsonsJson);

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
