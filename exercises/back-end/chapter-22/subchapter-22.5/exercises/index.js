const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

routes.forEach(({ route, router }) => app.use(route, router));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
