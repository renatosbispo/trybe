import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, IProductModel } from '../interfaces';

export default class ProductModel implements IProductModel {
  private connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(data: IProduct): Promise<IProduct> {
    const { name, brand, price, productionDate, expirationDate } = data;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO products_api.products (brand, price, production_date, expiration_date) VALUES (?, ?, ?, ?, ?)',
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
}
