import { v4 as uuidv4 } from 'uuid';
import Person from './Person';

export default class Student extends Person {
  public id: string;
  protected maxExamsGradesLength: number = 4;
  protected maxProjectsGradesLength: number = 2;

  constructor(
    public name: string,
    public birthDate: Date,
    private _examsGrades: number[],
    private _projectsGrades: number[]
  ) {
    super(name, birthDate);

    if (!this.areValidExamsGrades()) {
      this.handleInvalidExamsGrades();
    }

    if (!this.areValidProjectsGrades()) {
      this.handleInvalidProjectsGrades();
    }

    this.id = uuidv4();
  }

  protected areValidExamsGrades() {
    return this._examsGrades.length <= this.maxExamsGradesLength;
  }

  protected areValidProjectsGrades() {
    return this._projectsGrades.length <= this.maxProjectsGradesLength;
  }

  public getExamsGradesAverage() {
    return this.getGradesAverage(this._examsGrades);
  }

  protected getGradesSum(grades: number[]) {
    return grades.reduce((total, grade) => total + grade);
  }

  protected getGradesAverage(grades: number[]) {
    return this.getGradesSum(grades) / grades.length;
  }

  public getProjectsGradesAverage() {
    return this.getGradesAverage(this._projectsGrades);
  }

  protected handleInvalidExamsGrades() {
    throw new Error(
      `Expected to receive a maximum of ${this.maxExamsGradesLength} exams grades.`
    );
  }

  protected handleInvalidProjectsGrades() {
    throw new Error(
      `Expected to receive a maximum of ${this.maxProjectsGradesLength} projects grades.`
    );
  }

  get examsGrades() {
    return this._examsGrades;
  }

  get projectsGrades() {
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
