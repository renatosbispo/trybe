import { RequestHandler } from 'express';
import IProduct from './IProduct';

export default interface IProductController {
  create: RequestHandler<any, IProduct>;
  delete: RequestHandler<{ id: number }>;
  getAll: RequestHandler;
  getById: RequestHandler<{ id: number }>;
  getInPriceRange: RequestHandler<{ minPrice: number, maxPrice: number }>;
  getNotExpried: RequestHandler;
  update: RequestHandler<{ id: number }, IProduct>;
}
