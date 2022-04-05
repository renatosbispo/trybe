export default class Person {
  protected maxAge: number = 120;
  protected minNameLength: number = 3;

  constructor(public name: string, protected birthDate: Date) {
    if (!this.isValidBirthDate()) {
      this.handleInvalidBirthDate();
    }

    if (!this.isValidName()) {
      this.handleInvalidName();
    }
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
    return Date.now() - this.birthDate.getTime() > 0 && this.age <= this.maxAge;
  }

  protected isValidName(): boolean {
    return this.name.length >= this.minNameLength;
  }

  public printInfo(): void {
    console.log(this.constructor.name);
    console.log('------');
    console.log('Name:', this.name);
    console.log('Age:', this.age);
    console.log();
  }

  get age(): number {
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());

    return Number((timeDiff / (1000 * 3600 * 24) / 365.25).toFixed(1));
  }
}
