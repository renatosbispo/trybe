import IProduct from './IProduct';

export default interface IProductLayer {
  create: (data: IProduct) => Promise<IProduct>;
  delete: (id: number | string) => Promise<void>;
  getAll: () => Promise<IProduct[]>;
  getById: (id: number | string) => Promise<IProduct>;
  getInPriceRange: (minPrice: number | string, maxPrice: number | string) => Promise<IProduct[]>;
  getNotExpired: () => Promise<IProduct[]>;
  update: (id: number | string, data: IProduct) => Promise<IProduct>;
}