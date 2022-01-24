require('dotenv').config();
const express = require('express');

const app = express();

app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
