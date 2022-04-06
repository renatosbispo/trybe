import { v4 as uuidv4 } from 'uuid';
import Employee from './interfaces/IEmployee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  public readonly registration: string;

  constructor(
    protected _name: string,
    protected _birthDate: Date,
    public readonly admissionDate: Date,
    protected _salary: number,
    public subject: Subject
  ) {
    super(_name, _birthDate);

    if (!this.isValidAdmissionDate()) {
      this.handleInvalidAdmissionDate();
    }

    if (!this.isValidSalary()) {
      this.handleInvalidSalary();
    }

    this.admissionDate = this.admissionDate;
    this.registration = this.generateRegistration();
  }

  protected generateRegistration(): string {
    return uuidv4();
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

  public printInfo(lineEnd: string = '\n'): void {
    super.printInfo('');
    console.log('Admission date:', this.admissionDate);
    console.log('Salary:', this.salary);
    console.log('Subject:', this.subject.name, lineEnd);
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
