import IProduct from './IProduct';

export default interface IProductModel {
  create: (data: IProduct) => Promise<IProduct>;
  getAll: () => Promise<IProduct[]>;
  getById: (id: number) => Promise<IProduct>;
  getInPriceRange: (minPrice: number, maxPrice: number) => Promise<IProduct[]>;
  getNotExpired: () => Promise<IProduct[]>;
  remove: (id: number) => Promise<void>;
  update: (id: number, data: IProduct) => Promise<IProduct>;
}
