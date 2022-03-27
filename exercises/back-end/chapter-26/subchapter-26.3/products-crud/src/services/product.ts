import { IProduct, IProductService } from '../interfaces';
import { ErrorCode } from '../lib/error-codes';
import ErrorWithCode from '../lib/error-with-code';
import { ProductModel } from '../models';
import connection from '../models/connection';

export default class ProductService implements IProductService {
  private model;

  constructor() {
    this.model = new ProductModel(connection);
  }

  private parseProductPrice(price: string): number {
    return Number(price);
  }

  private validateDates(productionDate: string, expirationDate: string): void {
    const parsedProductionDate = Date.parse(productionDate);
    const parsedExpirationDate = Date.parse(expirationDate);

    if (parsedProductionDate >= parsedExpirationDate) {
      throw new ErrorWithCode(
        ErrorCode.ENTITY_PROPERTY_INVALID,
        'Production date cannot be equal to or greater than expiration date.'
      );
    }
  }

  private async validateId(id: string): Promise<IProduct> {
    const parsedId = parseInt(id);
    const product = await this.model.getById(parsedId);

    if (!product) {
      throw new ErrorWithCode(ErrorCode.ENTITY_NOT_FOUND, 'Product not found.');
    }

    return product;
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
    const parsedProductPrice = this.parseProductPrice(price as string);

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
    const product = await this.validateId(id);

    return product;
  }

  public async getInPriceRange(
    minPrice: string,
    maxPrice: string
  ): Promise<IProduct[]> {
    if (!minPrice || !maxPrice) {
      throw new ErrorWithCode(ErrorCode.QUERY_INVALID, 'Invalid query.');
    }

    const parsedMinPrice = Number(minPrice);
    const parsedMaxPrice = Number(maxPrice);

    if (parsedMinPrice < 0 || parsedMaxPrice < 0) {
      throw new ErrorWithCode(ErrorCode.QUERY_INVALID, 'Invalid query.');
    }

    const products = await this.model.getInPriceRange(
      parsedMinPrice,
      parsedMaxPrice
    );

    return products;
  }

  public async getNotExpired(): Promise<IProduct[]> {
    const products = await this.model.getNotExpired();

    return products;
  }

  public async remove(id: string): Promise<void> {
    await this.validateId(id);

    await this.model.remove(parseInt(id));
  }

  public async update(id: string, data: IProduct): Promise<IProduct> {
    await this.validateId(id);

    const { price, productionDate, expirationDate } = data;
    const parsedProductPrice = this.parseProductPrice(price as string);
    this.validatePrice(parsedProductPrice);
    this.validateDates(productionDate, expirationDate);

    const updatedProduct = await this.model.update(parseInt(id), data);

    return updatedProduct;
  }
}
