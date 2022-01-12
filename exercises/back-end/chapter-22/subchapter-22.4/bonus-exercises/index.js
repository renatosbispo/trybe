const express = require('express');
const bodyParser = require('body-parser');
const { generateToken } = require('./authorization');
const { readSimpsons, writeSimpsons } = require('./filesystem');

const app = express();
const port = 3010;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

let currentAuthorizationToken = null;

app.get('/simpsons', (req, res) => {
  const token = req.headers.authorization;

  if (!currentAuthorizationToken || token !== currentAuthorizationToken) {
    res.status(401).json({ message: 'Invalid token!' });
    return;
  }

  const { simpsons, error } = readSimpsons();

  if (error) {
    res.status(500).send();
    return;
  }

  res.status(200).json(simpsons);
});

app.get('/simpsons/:id', (req, res) => {
  const token = req.headers.authorization;

  if (!currentAuthorizationToken || token !== currentAuthorizationToken) {
    res.status(401).json({ message: 'Invalid token!' });
    return;
  }

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
  const token = req.headers.authorization;

  if (!currentAuthorizationToken || token !== currentAuthorizationToken) {
    res.status(401).json({ message: 'Invalid token!' });
    return;
  }

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
