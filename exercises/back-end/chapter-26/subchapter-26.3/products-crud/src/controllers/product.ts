import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IProduct, IProductController } from '../interfaces';
import { ProductService } from '../services';

export default class ProductController implements IProductController {
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
    _req: Request<any, IProduct[]>,
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

  public async getInPriceRange(
    req: Request<any, IProduct[], any, { minPrice: string; maxPrice: string }>,
    res: Response<IProduct[]>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { minPrice, maxPrice } = req.query;

      const products = await this.service.getInPriceRange(minPrice, maxPrice);

      res.status(StatusCodes.OK).json(products);
    } catch (error) {
      next(error);
    }
  }

  public async getNotExpired(
    _req: Request<any, IProduct[]>,
    res: Response<IProduct[]>,
    next: NextFunction
  ): Promise<void> {
    try {
      const products = await this.service.getNotExpired();

      res.status(StatusCodes.OK).json(products);
    } catch (error) {
      next(error);
    }
  }

  public async remove(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      await this.service.remove(id);

      res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request<{ id: string }, IProduct, IProduct>,
    res: Response<IProduct>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const { name, brand, price, productionDate, expirationDate } = req.body;

      const updatedProduct = await this.service.update(id, {
        name,
        brand,
        price,
        productionDate,
        expirationDate,
      });

      res.status(StatusCodes.OK).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }
}
