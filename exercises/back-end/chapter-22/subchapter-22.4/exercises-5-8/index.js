const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsons, writeSimpsons } = require('./filesystem');

const app = express();
const port = 3042;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
console.log(readSimpsons());
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
    res.status(500).send();
    return;
  }

  const targetSimpson = simpsons.find(
    ({ id: simpsonId }) => simpsonId === targetId
  );

  if (!targetSimpson) {
    res
      .status(404)
      .json({ message: `No character with id ${targetId} was found.` });
    return;
  }

  res.status(200).json(targetSimpson);
});
