const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// Exercise 1
app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong' });
});
