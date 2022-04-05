export default class Person {
  protected maxAge: number = 120;
  protected minNameLength: number = 3;

  constructor(protected _name: string, protected birthDate: Date) {
    if (!this.isValidBirthDate()) {
      this.handleInvalidBirthDate();
    }

    if (!this.isValidName()) {
      this.handleInvalidName();
    }
  }

  protected buildSeparator(header: string, separatorChar: string = '-') {
    let separator = '';

    for (let index = 0; index < header.length; index += 1) {
      separator += separatorChar;
    }

    return separator;
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
    return this._name.length >= this.minNameLength;
  }

  public printInfo(endLine: string = '\n'): void {
    console.log(this.constructor.name);
    console.log(this.buildSeparator(this.constructor.name));
    console.log('Name:', this._name);
    console.log('Age:', this.age, endLine);
  }

  get age(): number {
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());

    return Number((timeDiff / (1000 * 3600 * 24) / 365.25).toFixed(1));
  }

  set age(_newAge) {
    throw new Error('Cannot set age.');
  }
}
