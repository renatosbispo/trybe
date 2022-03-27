import IProduct from './IProduct';

export default interface IProductService {
  create: (data: IProduct) => Promise<IProduct>;
  getAll: () => Promise<IProduct[]>;
  getById: (id: string) => Promise<IProduct>;
  getInPriceRange: (minPrice: string, maxPrice: string) => Promise<IProduct[]>;
  getNotExpired: () => Promise<IProduct[]>;
  remove: (id: string) => Promise<void>;
  update: (id: string, data: IProduct) => Promise<IProduct>;
}
