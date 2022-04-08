export default class OrderItem {
  protected nameMinLength: number = 3;

  constructor(
    protected _name: string,
    protected _price: number,
    protected _quantity: number
  ) {
    this.name = this._name;
    this.price = this._price;
    this.quantity = this._quantity;
  }

  protected handleInvalidName(): void {
    throw new Error(
      `Item name must have at least ${this.nameMinLength} characters.`
    );
  }

  protected handleInvalidPrice(): void {
    throw new Error('Item price cannot be negative.');
  }

  protected isValidName(name: string = this._name) {
    return name.length >= this.nameMinLength;
  }

  protected isValidPrice(price: number = this._price) {
    return price >= 0;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  set name(newName: string) {
    if (!this.isValidName(newName)) {
      this.handleInvalidName();
    }

    this._name = newName;
  }

  set price(newPrice: number) {
    if (!this.isValidPrice(newPrice)) {
      this.handleInvalidPrice();
    }

    this._price = newPrice;
  }

  set quantity(newQuantity: number) {
    this._quantity = newQuantity;
  }
}
