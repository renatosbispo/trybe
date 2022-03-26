import IProduct from './IProduct';

export default interface IProductLayer {
  create: (data: IProduct) => Promise<IProduct>;
  getAll: () => Promise<IProduct[]>;
  getById: (id: number | string) => Promise<IProduct>;
  getInPriceRange: (minPrice: number | string, maxPrice: number | string) => Promise<IProduct[]>;
  getNotExpired: () => Promise<IProduct[]>;
  remove: (id: number | string) => Promise<void>;
  update: (id: number | string, data: IProduct) => Promise<IProduct>;
}