import { v4 as uuidv4 } from 'uuid';
import PaymentOption from './payment-option';
import OrderItem from './order-item';
import Person from '../person';
import PrintConstructorName from '../../types/PrintConstructorName';

export default class Order {
  public id: string;
  public createdAt: Date;

  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _customer: Person,
    protected _items: OrderItem[],
    protected _paymentOption: keyof typeof PaymentOption,
    protected _discount: number
  ) {
    this.customer = this._customer;
    this.discount = this.discount;
    this.items = this._items;
    this.paymentOption = this._paymentOption;
    this.id = uuidv4();
    this.createdAt = new Date();
  }

  protected areValidItems(items: OrderItem[] = this._items) {
    return items.length > 0;
  }

  protected getOrderTotal() {
    return this.items.reduce(
      (total, { price, quantity }) => total + quantity * price,
      0
    );
  }

  public getOrderTotalWithDiscount() {
    return this.getOrderTotal() * (1 - this.discount);
  }

  protected handleInvalidDiscount() {
    throw new Error('Discount cannot be negative.');
  }

  protected handleInvalidItems() {
    throw new Error('Items cannot be empty.');
  }

  protected isValidDiscount(discount: number = this._discount) {
    return discount >= 0;
  }

  public printInfo(): void {
    this.printConstructorName(this.constructor.name);
    this.printPublicProperties();
    console.log('');
  }

  protected printPublicProperties(): void {
    console.log('Order ID:', this.id);
    console.log('Created at:', this.createdAt);

    console.log(
      'Customer:',
      this._customer.constructor.name,
      this._customer.name
    );

    console.log(
      'Items:',
      this._items.map(({ name, price, quantity }) => ({
        name,
        price,
        quantity,
      }))
    );

    console.log('Payment option:', this._paymentOption);
    console.log('Total with discount:', this.getOrderTotalWithDiscount());
  }

  public get discount(): number {
    return this._discount;
  }

  public set discount(value: number) {
    if (!this.isValidDiscount(value)) {
      this.handleInvalidDiscount();
    }

    this._discount = value;
  }

  public get paymentOption(): keyof typeof PaymentOption {
    return this._paymentOption;
  }

  public set paymentOption(value: keyof typeof PaymentOption) {
    this._paymentOption = value;
  }

  public get items(): OrderItem[] {
    return this._items;
  }

  public set items(value: OrderItem[]) {
    if (!this.areValidItems(value)) {
      this.handleInvalidItems();
    }

    this._items = value;
  }

  public get customer(): Person {
    return this._customer;
  }

  public set customer(value: Person) {
    this._customer = value;
  }
}
