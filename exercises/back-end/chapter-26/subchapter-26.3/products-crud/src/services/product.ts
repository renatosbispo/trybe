import { IProduct, IProductService } from '../interfaces';
import { ErrorCode } from '../lib/error-codes';
import ErrorWithCode from '../lib/error-with-code';
import { ProductModel } from '../models';
import connection from '../models/connection';

export default class ProductService {
  private model;

  constructor() {
    this.model = new ProductModel(connection);
  }

  private parseProductPrice(price: number | string): number {
    return Number(price);
  }

  private validateDates(productionDate: string, expirationDate: string): void {
    const parsedProductionDate = Date.parse(productionDate);
    const parsedExpirationDate = Date.parse(expirationDate);

    if (parsedProductionDate >= parsedExpirationDate) {
      throw new ErrorWithCode(
        ErrorCode.ENTITY_PROPERTY_INVALID,
        'Production date cannot be equal or greater than expiration date.'
      );
    }
  }

  private validatePrice(price: number): void {
    if (price < 0) {
      throw new ErrorWithCode(
        ErrorCode.ENTITY_PROPERTY_INVALID,
        'Price cannot be negative.'
      );
    }
  }

  public async create(data: IProduct): Promise<IProduct> {
    const { price, productionDate, expirationDate } = data;
    const parsedProductPrice = this.parseProductPrice(price);

    this.validatePrice(parsedProductPrice);
    this.validateDates(productionDate, expirationDate);

    const newProduct = await this.model.create({
      ...data,
      price: parsedProductPrice,
    });

    return newProduct;
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();

    return products;
  }

  public async getById(id: string): Promise<IProduct> {
    const parsedId = parseInt(id);
    const product = await this.model.getById(parsedId);

    if (!product) {
      throw new ErrorWithCode(ErrorCode.ENTITY_NOT_FOUND, 'Product not found.');
    }

    return product;
  }
}
