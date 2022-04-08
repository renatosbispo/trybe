import Teacher from './teacher';
import PrintConstructorName from '../types/PrintConstructorName';

export default abstract class AbstractEvaluation {
  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _score: number,
    public teacher: Teacher,
    public type: string,
    protected maxScore: number
  ) {
    this.score = this._score;
  }

  protected handleInvalidScore(): void {
    throw new Error(
      `Score for ${this.type} cannot be negative or greater than ${this.maxScore}`
    );
  }

  protected isValidScore(): boolean {
    return this._score >= 0 && this._score <= this.maxScore;
  }

  public printInfo(): void {
    this.printConstructorName(this.constructor.name);
    console.log('Teacher:', this.teacher.name);
    console.log('Score:', this._score);
    this.printPublicProperties();
    console.log('');
  }

  protected abstract printPublicProperties(): void;

  get score(): number {
    return this._score;
  }

  set score(newScore) {
    if (!this.isValidScore()) {
      this.handleInvalidScore();
    }

    this._score = newScore;
  }
}
