import { RequestHandler } from 'express';
import IProduct from './IProduct';

export default interface IProductController {
  create: RequestHandler<any, IProduct, IProduct>;
  getAll: RequestHandler<any, IProduct[]>;
  getById: RequestHandler<{ id: string }, IProduct>;
  getInPriceRange: RequestHandler<
  any,
  IProduct[],
  any,
  { minPrice: string; maxPrice: string }
  >;
  getNotExpired: RequestHandler<any, IProduct[]>;
  remove: RequestHandler<{ id: string }>;
  update: RequestHandler<{ id: string }, IProduct, IProduct>;
}
