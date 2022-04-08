import Order from './order';
import Person from '../person';

export default class OrderHistory {
  constructor(protected _orders: Order[]) {
    this.orders = this._orders;
  }

  get orders(): Order[] {
    return this._orders;
  }

  set orders(value: Order[]) {
    this._orders = value;
  }

  public addOrder(...orders: Order[]): void {
    this.orders.push(...orders);
  }

  public removeOrder(...orders: Order[]): void {
    orders.forEach((order) => {
      this.orders = this.orders.filter(({ id }) => id !== order.id);
    });
  }

  public listByCustomer(customer: Person): void {
    const customerOrders = this.orders.filter(
      ({ customer: { name } }) => name === customer.name
    );

    console.log(JSON.stringify(customerOrders, null, 2));
  }

  public listBySortedValue(sortOrder: 'ASC' | 'DESC'): void {
    const predicate =
      sortOrder === 'ASC'
        ? (a: Order, b: Order) =>
            a.getOrderTotalWithDiscount() - b.getOrderTotalWithDiscount()
        : (a: Order, b: Order) =>
            b.getOrderTotalWithDiscount() - a.getOrderTotalWithDiscount();

    console.log(JSON.stringify([...this.orders].sort(predicate), null, 2));
  }
}
