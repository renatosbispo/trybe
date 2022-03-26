import { RequestHandler } from 'express';
import IProduct from './IProduct';

export default interface IProductController {
  create: RequestHandler<any, IProduct>;
  delete: RequestHandler<{ id: string }>;
  getAll: RequestHandler;
  getById: RequestHandler<{ id: string }>;
  getInPriceRange: RequestHandler<{ minPrice: string, maxPrice: string }>;
  getNotExpried: RequestHandler;
  update: RequestHandler<{ id: string }, IProduct>;
}
