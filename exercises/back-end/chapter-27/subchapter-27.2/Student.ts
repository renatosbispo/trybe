import { v4 as uuidv4 } from 'uuid';
import Person from './Person';

export default class Student extends Person {
  public readonly id: string;
  protected maxExamsGradesLength: number = 4;
  protected maxProjectsGradesLength: number = 2;

  constructor(
    protected _name: string,
    protected _birthDate: Date,
    protected _examsGrades: number[],
    protected _projectsGrades: number[]
  ) {
    super(_name, _birthDate);

    if (!this.areValidExamsGrades()) {
      this.handleInvalidExamsGrades();
    }

    if (!this.areValidProjectsGrades()) {
      this.handleInvalidProjectsGrades();
    }

    this.id = uuidv4();
  }

  protected areValidExamsGrades(): boolean {
    return this._examsGrades.length <= this.maxExamsGradesLength;
  }

  protected areValidProjectsGrades(): boolean {
    return this._projectsGrades.length <= this.maxProjectsGradesLength;
  }

  public getExamsGradesAverage(): number {
    return this.getGradesAverage(this._examsGrades);
  }

  protected getGradesSum(grades: number[]): number {
    return grades.reduce((total, grade) => total + grade);
  }

  protected getGradesAverage(grades: number[]): number {
    return this.getGradesSum(grades) / grades.length;
  }

  public getProjectsGradesAverage(): number {
    return this.getGradesAverage(this._projectsGrades);
  }

  protected handleInvalidExamsGrades(): void {
    throw new Error(
      `Expected to receive a maximum of ${this.maxExamsGradesLength} exams grades.`
    );
  }

  protected handleInvalidProjectsGrades(): void {
    throw new Error(
      `Expected to receive a maximum of ${this.maxProjectsGradesLength} projects grades.`
    );
  }

  public printInfo(lineEnd: string = '\n'): void {
    super.printInfo('');
    console.log('Student ID:', this.id);
    console.log('Exams grades:', this.examsGrades);
    console.log('Exams grades average:', this.getExamsGradesAverage());
    console.log('Projects grades:', this.projectsGrades);

    console.log(
      'Projects grades average:',
      this.getProjectsGradesAverage(),
      lineEnd
    );
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  get projectsGrades(): number[] {
    return this._projectsGrades;
  }

  set examsGrades(grades: number[]) {
    if (!this.areValidExamsGrades()) {
      this.handleInvalidExamsGrades();
    }

    this._examsGrades = grades;
  }

  set projectsGrades(grades: number[]) {
    if (!this.areValidProjectsGrades()) {
      this.handleInvalidProjectsGrades();
    }

    this._projectsGrades = grades;
  }
}
