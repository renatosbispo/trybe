import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import BookService from '../services/books.service';

class BooksController {
  bookService = new BookService();
  public async getAll(_req: Request, res: Response) {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  }
}

export default BooksController;
