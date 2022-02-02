require('dotenv').config();
const express = require('express');
const { book } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;
const handleError = (_error, _req, res, _next) => {
  res.status(500).json({ message: 'Something is wrong' });
};

app.use(express.json());

app
  .get('/books', async (_, res, next) => {
    try {
      const books = await book.findAll();

      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  })
  .post('/books', async (req, res, next) => {
    try {
      const { title, author, pageQuantity } = req.body;

      const newBook = await book.create({ title, author, pageQuantity });

      res.status(201).json(newBook);
    } catch (error) {
      next(error);
    }
  })
  .get('/books/:id', async (req, res, next) => {
    try {
      const targetId = req.params.id;
      const targetBook = await book.findOne({ where: { id: targetId } });

      res.status(200).json(targetBook);
    } catch (error) {
      next(error);
    }
  })
  .put('/books/:id', async (req, res, next) => {
    try {
      const targetId = req.params.id;
      const { title, author, pageQuantity } = req.body;
      const {
        title: currentTitle,
        author: currentAuthor,
        pageQuantity: currentPageQuantity,
      } = await book.findOne({ where: { id: targetId } });

      await book.update(
        {
          title: title || currentTitle,
          author: author || currentAuthor,
          pageQuantity: pageQuantity || currentPageQuantity,
        },
        { where: { id: targetId } }
      );

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
