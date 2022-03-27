import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct, IProductModel } from '../interfaces';

export default class ProductModel implements IProductModel {
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
      'SELECT name, brand, price, production_date as productionDate, expiration_date as expirationDate FROM products_api.products'
    );

    return products as IProduct[];
  }

  public async getById(id: number): Promise<IProduct> {
    const [[product]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT name, brand, price, production_date as productionDate, expiration_date as expirationDate FROM products_api.products WHERE id = ?',
      [id]
    );

    return product as IProduct;
  }

  public async getInPriceRange(
    minPrice: number,
    maxPrice: number
  ): Promise<IProduct[]> {
    const [products] = await this.connection.execute<RowDataPacket[]>(
      'SELECT name, brand, price, production_date as productionDate, expiration_date as expirationDate FROM products_api.products WHERE price BETWEEN ? AND ?',
      [minPrice, maxPrice]
    );

    return products as IProduct[];
  }

  public async getNotExpired(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<RowDataPacket[]>(
      'SELECT name, brand, price, production_date as productionDate, expiration_date as expirationDate FROM products_api.products WHERE expiration_date >= NOW()'
    );

    return products as IProduct[];
  }

  public async remove(id: number): Promise<void> {
    await this.connection.execute(
      'DELETE FROM products_api.products WHERE id = ?',
      [id]
    );
  }

  public async update(id: number, data: IProduct): Promise<IProduct> {
    const { name, brand, price, productionDate, expirationDate } = data;

    await this.connection.execute(
      'UPDATE products_api.products SET name = ?, brand = ?, price = ?, production_date = ?, expiration_date = ? WHERE id = ?',
      [name, brand, price, productionDate, expirationDate, id]
    );

    return {
      id,
      name,
      brand,
      price,
      productionDate,
      expirationDate,
    };
  }
}
