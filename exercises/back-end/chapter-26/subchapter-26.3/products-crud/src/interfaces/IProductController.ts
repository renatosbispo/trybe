import { RequestHandler } from 'express';
import IProduct from './IProduct';

export default interface IProductController {
  create: RequestHandler<any, IProduct, IProduct>;
  delete: RequestHandler<{ id: string }>;
  getAll: RequestHandler<any, IProduct[]>;
  getById: RequestHandler<{ id: string }, IProduct>;
  getInPriceRange: RequestHandler<
    any,
    IProduct[],
    any,
    { minPrice: string; maxPrice: string }
  >;
  getNotExpired: RequestHandler<any, IProduct[]>;
  update: RequestHandler<{ id: string }, IProduct, IProduct>;
}
