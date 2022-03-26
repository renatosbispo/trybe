import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IProduct } from '../interfaces';
import { ProductService } from '../services';

export default class ProductController {
  private service;

  constructor() {
    this.service = new ProductService();
  }

  public async create(
    req: Request<any, IProduct, IProduct>,
    res: Response<IProduct>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { name, brand, price, productionDate, expirationDate } = req.body;

      const newProduct = await this.service.create({
        name,
        brand,
        price,
        productionDate,
        expirationDate,
      });

      res.status(StatusCodes.CREATED).json(newProduct);
    } catch (error) {
      next(error);
    }
  }

  public async getAll(
    req: Request<any, IProduct[]>,
    res: Response<IProduct[]>,
    next: NextFunction
  ): Promise<void> {
    try {
      const products = await this.service.getAll();

      res.status(StatusCodes.OK).json(products);
    } catch (error) {
      next(error);
    }
  }

  public async getById(
    req: Request<{ id: string }, IProduct>,
    res: Response<IProduct>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const product = await this.service.getById(id);

      res.status(StatusCodes.OK).json(product);
    } catch (error) {
      next(error);
    }
  }
}
