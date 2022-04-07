import PrintConstructorName from './types/PrintConstructorName';
import Person from './person';

export default class Employee extends Person {
  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _name: string,
    protected _birthDate: Date,
    public readonly admissionDate: Date,
    protected _salary: number,
  ) {
    super(printConstructorName, _name, _birthDate);

    if (!this.isValidAdmissionDate()) {
      this.handleInvalidAdmissionDate();
    }

    this.salary = this._salary;
  }

  protected handleInvalidAdmissionDate(): void {
    throw new Error(
      `Admission date cannot be a future date.`
    );
  }

  protected handleInvalidSalary(): void {
    throw new Error(
      `Salary cannot be negative.`
    );
  }

  protected isValidAdmissionDate(): boolean {
    return Date.now() - this.admissionDate.getTime() > 0;
  }

  protected isValidSalary(salary: number = this._salary): boolean {
    return salary >= 0;
  }

  protected printPublicProperties(): void {
    console.log('Admission date:', this.admissionDate);
    console.log('Salary:', this._salary);
  }

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary) {
    if (!this.isValidSalary(newSalary)) {
      this.handleInvalidSalary();
    }

    this._salary = newSalary;
  }
}
