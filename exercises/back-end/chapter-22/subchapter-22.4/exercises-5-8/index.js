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
