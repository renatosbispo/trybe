import { Router, Request, Response } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router
  .get('/books', booksController.getAll)
  .get('/books/:id', booksController.getById);

export default router;
