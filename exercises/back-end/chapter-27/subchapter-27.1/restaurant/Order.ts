import PaymentOption from './PaymentOption';
import OrderItem from './OrderItem';

export default class Order {
  constructor(
    public customerId: number,
    public items: OrderItem[],
    public paymentOption: PaymentOption
  ) {}
}
