require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handleError = require('./middlewares/error');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong!' });
});

routes.forEach(({ path, router }) => app.use(path, router));

app.use(handleError);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
