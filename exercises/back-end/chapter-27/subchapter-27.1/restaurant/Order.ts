import PaymentOption from './PaymentOption';
import OrderItem from './OrderItem';

export default class Order {
  constructor(
    public customerId: number,
    public items: OrderItem[],
    public paymentOption: PaymentOption,
    public discount: number,
  ) {}

  private getOrderTotal() {
    return this.items.reduce(
      (total, { price, quantity }) => total + quantity * price,
      0
    );
  }

  public getOrderTotalWithDiscount() {
    return this.getOrderTotal() * (1 - this.discount);
  }
}
