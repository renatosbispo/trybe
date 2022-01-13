const express = require('express');
const bodyParser = require('body-parser');
const { pingMiddleware } = require('./middlewares/ping');
const { helloMiddleware } = require('./middlewares/hello');
const { greetingMiddleware } = require('./middlewares/greeting');
const { getSimpsons } = require('./middlewares/getSimpsons');
const { getSimpsonById } = require('./middlewares/getSimpsonById');
const { createSimpson } = require('./middlewares/createSimpson');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.use(bodyParser.json());

app.get('/ping', pingMiddleware);

app.post('/ping', helloMiddleware);

app.post('/greeting', greetingMiddleware);

app.get('/simpsons', getSimpsons);

app.get('/simpsons/:id', getSimpsonById);

app.post('/simpsons', createSimpson);
