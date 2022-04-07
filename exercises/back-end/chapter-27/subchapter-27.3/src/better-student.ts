import { v4 as uuidv4 } from 'uuid';
import Enrollable from './interfaces/Enrollable';
import PrintConstructorName from './types/PrintConstructorName';
import Person from './person';
import EvaluationResult from './evaluation-result';

export default class BetterStudent extends Person implements Enrollable {
  public readonly enrollment: string;
  protected maxExamsGradesLength: number = 4;
  protected maxProjectsGradesLength: number = 2;

  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _name: string,
    protected _birthDate: Date,
    public readonly evaluationsResults: EvaluationResult[]
  ) {
    super(printConstructorName, _name, _birthDate);

    this.enrollment = this.generateEnrollment();
  }

  public addEvaluationResult(...evaluationResult: EvaluationResult[]): void {
    this.evaluationsResults.push(...evaluationResult);
  }

  protected getGradesSum(): number {
    return this.evaluationsResults.reduce(
      (total, { score }) => (total += score),
      0
    );
  }

  public getGradesAverages(): number {
    return this.getGradesSum() / this.evaluationsResults.length;
  }

  protected generateEnrollment(): string {
    return uuidv4();
  }

  protected printPublicProperties(): void {
    console.log('Enrollment ID:', this.enrollment);
    console.log('Evaluation results:');
    this.evaluationsResults.forEach(
      ({ evaluation: { type, score: maxScore }, score }) => {
        console.log('>', type, `${score}/${maxScore}`);
      }
    );
    console.log('Grades average:', this.getGradesAverages());
  }
}
