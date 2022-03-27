export default interface IProduct {
  id?: number;
  name: string;
  brand: string;
  price: number | string;
  productionDate: string;
  expirationDate: string;
}
