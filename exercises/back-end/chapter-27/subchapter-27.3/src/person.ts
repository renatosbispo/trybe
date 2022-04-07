import PrintConstructorName from './types/PrintConstructorName';

export default abstract class Person {
  public readonly age: number;
  protected maxAge: number = 120;
  protected minNameLength: number = 3;

  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _name: string,
    protected _birthDate: Date
  ) {
    this.age = this.calculateAge();

    if (!this.isValidBirthDate()) {
      this.handleInvalidBirthDate();
    }

    if (!this.isValidName()) {
      this.handleInvalidName();
    }
  }

  protected calculateAge(): number {
    const timeDiff = Math.abs(Date.now() - new Date(this._birthDate).getTime());

    return Number((timeDiff / (1000 * 3600 * 24) / 365.25).toFixed(1));
  }

  protected handleInvalidBirthDate(): void {
    throw new Error(
      `Birth date cannot be a future date or result in an age greater than ${this.maxAge}`
    );
  }

  protected handleInvalidName(): void {
    throw new Error(
      `Name must have at least ${this.minNameLength} characters.`
    );
  }

  protected isValidBirthDate(): boolean {
    return (
      Date.now() - this._birthDate.getTime() > 0 && this.age <= this.maxAge
    );
  }

  protected isValidName(name: string = this._name): boolean {
    return name.length >= this.minNameLength;
  }

  protected abstract printPublicProperties(): void;

  public printInfo(): void {
    this.printConstructorName(this.constructor.name);
    console.log('Name:', this.name);
    console.log('Age:', this.age);
    this.printPublicProperties();
    console.log('');
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (!this.isValidName(newName)) {
      this.handleInvalidName();
    }

    this._name = newName;
  }
}
