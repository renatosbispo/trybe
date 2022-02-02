require('dotenv').config();
const express = require('express');
const { book } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;
const handleError = (_error, _req, res, _next) => {
  res.status(500).json({ message: 'Something is wrong' });
};

app.use(express.json());

app.get('/books', async (_, res, next) => {
  try {
    const books = await book.findAll();

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
});

app.get('/books/:id', async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const targetBook = await book.findOne({ where: { id: targetId } });

    res.status(200).json(targetBook);
  } catch (error) {
    next(error);
  }
});

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
