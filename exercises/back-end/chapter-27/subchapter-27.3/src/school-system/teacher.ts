import { v4 as uuidv4 } from 'uuid';
import Employee from './employee';
import Enrollable from '../interfaces/Enrollable';
import Subject from './subject';
import PrintConstructorName from '../types/PrintConstructorName';

export default class Teacher extends Employee implements Enrollable {
  public readonly enrollment: string;

  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _name: string,
    protected _birthDate: Date,
    public readonly admissionDate: Date,
    protected _salary: number,
    public subject: Subject,
  ) {
    super(printConstructorName, _name, _birthDate, admissionDate, _salary);

    this.enrollment = this.generateEnrollment();
  }

  protected generateEnrollment(): string {
    return uuidv4();
  }

  protected printPublicProperties(): void {
    super.printPublicProperties();
    console.log('Enrollment ID:', this.enrollment);
    console.log('Subject:', this.subject.name);
  }
}