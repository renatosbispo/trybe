const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsons, writeSimpsons } = require('./filesystem');

const app = express();
const port = 3042;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/simpsons', (_, res) => {
  const { simpsons, error } = readSimpsons();

  if (error) {
    res.status(500).send();
    return;
  }

  res.status(200).json(simpsons);
});

app.get('/simpsons/:id', (req, res) => {
  const { id: targetId } = req.params;

  const { simpsons, error } = readSimpsons();

  if (error) {
    res.status(500).end();
    return;
  }

  const targetSimpson = simpsons.find(
    ({ id: simpsonId }) => simpsonId === targetId
  );

  if (!targetSimpson) {
    res
      .status(404)
      .json({ message: `No character with ID ${targetId} was found.` });
    return;
  }

  res.status(200).json(targetSimpson);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;

  const { simpsons, error: readError } = readSimpsons();

  if (readError) {
    res.status(500).end();
    return;
  }

  const idExists = simpsons.some(({ id: simpsonId }) => simpsonId === id);

  if (idExists) {
    res
      .status(409)
      .json({ message: `A character with ID ${id} already exists.` });
    return;
  }

  const { error: writeError } = writeSimpsons([...simpsons, { id, name }]);

  if (writeError) {
    res.status(500).end();
    return;
  }

  res.status(204).end();
});
