import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct, IProductModel } from '../interfaces';

export default class ProductModel {
  private connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(data: IProduct): Promise<IProduct> {
    const { name, brand, price, productionDate, expirationDate } = data;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO products_api.products (name, brand, price, production_date, expiration_date) VALUES (?, ?, ?, ?, ?)',
      [name, brand, price, productionDate, expirationDate]
    );

    const newProduct = {
      id: insertId,
      name,
      brand,
      price,
      productionDate,
      expirationDate,
    };

    return newProduct;
  }

  public async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM products_api.products'
    );

    return products as IProduct[];
  }

  public async getById(id: number): Promise<IProduct> {
    const [[product]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM products_api.products WHERE id = ?',
      [id]
    );

    return product as IProduct;
  }
}
