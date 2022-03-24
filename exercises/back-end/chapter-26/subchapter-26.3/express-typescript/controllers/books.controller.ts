// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import BookService from '../services/books.service';
import Book from '../interfaces/book.interface';

class BooksController {
  bookService = new BookService();
  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = await this.bookService.getById(id);

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Book not found!'});
    }

    res.status(StatusCodes.OK).json(book);
  }

  public create = async (req: Request, res: Response) => {
    const book = this.buildBookByParams(req.body);

    const bookCreated = await this.bookService.create(book);
    res.status(StatusCodes.CREATED).json(bookCreated);
  }

  private buildBookByParams(params: any): Book {
    const { title, price, author, isbn } = params;
    return { title, price, author, isbn } as Book;
  }

  public update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = this.buildBookByParams(req.body);
    await this.bookService.update(id, book);

    res.status(StatusCodes.NO_CONTENT).end();

  }
}

export default BooksController;