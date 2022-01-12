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

// Exercise 2
app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` });
});

// Exercise 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age < 18) {
    res.status(401).json({ message: 'Unauthorized.' });
    return;
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

// Exercise 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res
    .status(200)
    .json({ message: `Your name is ${name} and you are ${age} years old.` });
});
