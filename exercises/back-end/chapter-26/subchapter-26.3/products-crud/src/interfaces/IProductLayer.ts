import IProduct from './IProduct';

export default interface IProductLayer {
  create: (data: IProduct) => Promise<IProduct>;
  delete: (id: number) => Promise<void>;
  getAll: () => Promise<IProduct[]>;
  getById: (id: number) => Promise<IProduct>;
  getInPriceRange: (minPrice: number, maxPrice: number) => Promise<IProduct[]>;
  getNotExpired: () => Promise<IProduct[]>;
  update: (id: number, data: IProduct) => Promise<IProduct>;
}