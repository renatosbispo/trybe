import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public create(book: Book): Promise<Book> {
    return this.model.create(book);
  }

  public async update(id: number, book: Book): Promise<any> {
    await this.checkBookExists(id);

    return this.model.update(id, book);
  }

  public async remove(id: number): Promise<any> {
    await this.checkBookExists(id);

    return this.model.remove(id);
  }

  private async checkBookExists(id: number) {
    if (!(await this.model.getById(id))) {
      throw new Error('Book doesn`t exists!');
    }
  }
}

export default BookService;
