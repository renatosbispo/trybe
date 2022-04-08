import Evaluation from './evaluation';
import PrintConstructorName from '../types/PrintConstructorName';

export default class EvaluationResult {
  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _evaluation: Evaluation,
    protected _score: number
  ) {
    this.evaluation = this._evaluation;
    this.score = this._score;
  }

  protected handleInvalidScore() {
    throw new Error(
      `Evaluation result score cannot be negative or greater than ${this.evaluation.score}`
    );
  }

  protected isValidScore(
    score: number = this._score,
    evaluation: Evaluation = this._evaluation
  ) {
    return score >= 0 && score <= evaluation.score;
  }

  public printInfo(): void {
    this.printConstructorName(this.constructor.name);
    this.printPublicProperties();
    console.log('');
  }

  protected printPublicProperties(): void {
    console.log('Evaluation type:', this._evaluation.type);
    console.log('Evaluation teacher:', this._evaluation.teacher.name);
    console.log('Max score:', this._evaluation.score);
    console.log('Student score:', this._score);
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  get score(): number {
    return this._score;
  }

  set evaluation(newEvaluation: Evaluation) {
    if (!this.isValidScore(this._score, newEvaluation)) {
      this.handleInvalidScore();
    }

    this._evaluation = newEvaluation;
  }

  set score(newScore: number) {
    if (!this.isValidScore(newScore)) {
      this.handleInvalidScore();
    }

    this._score = newScore;
  }
}
