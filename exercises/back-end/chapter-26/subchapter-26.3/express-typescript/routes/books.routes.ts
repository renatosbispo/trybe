import { Router, Request, Response } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

router
  .get('/books', booksController.getAll)
  .get('/books/:id', booksController.getById)
  .post('/books', validationBook, booksController.create)
  .put('/books/:id', validationBook, booksController.update)
  .delete('/books/:id', booksController.remove);

export default router;
