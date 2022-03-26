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
}
