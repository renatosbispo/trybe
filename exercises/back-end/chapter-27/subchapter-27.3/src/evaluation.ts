import Teacher from './teacher';
import PrintConstructorName from './types/PrintConstructorName';

enum EvaluationType {
  Exam = 'Exam',
  Project = 'Project',
}

export default class Evaluation {
  protected maximumScores = new Map<keyof typeof EvaluationType, number>([
    [EvaluationType.Exam, 25],
    [EvaluationType.Project, 50],
  ]);

  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _score: number,
    public teacher: Teacher,
    protected _type: keyof typeof EvaluationType
  ) {
    if (!this.isValidScore()) {
      this.handleInvalidScore();
    }
  }

  protected getMaximumScore(
    evaluationType: keyof typeof EvaluationType = this._type
  ): number {
    return this.maximumScores.get(evaluationType) as number;
  }

  protected handleInvalidScore(): void {
    throw new Error(
      `Score for ${
        this._type
      } cannot be negative or greater than ${this.getMaximumScore()}`
    );
  }

  protected isValidScore(
    evaluationType: keyof typeof EvaluationType = this._type,
    scoreValue: number = this._score,
  ): boolean {
    return (
      scoreValue >= 0 && scoreValue <= this.getMaximumScore(evaluationType)
    );
  }

  public printInfo(): void {
    this.printConstructorName(this.constructor.name);
    this.printPublicProperties();
    console.log('');
  }

  protected printPublicProperties(): void {
    console.log('Type:', this._type);
    console.log('Teacher:', this.teacher.name);
    console.log('Score:', this._score);
  }

  get score(): number {
    return this._score;
  }

  set score(newScore) {
    if (!this.isValidScore(this._type, newScore)) {
      this.handleInvalidScore();
    }

    this._score = newScore;
  }

  get type(): keyof typeof EvaluationType {
    return this._type;
  }

  set type(newType: keyof typeof EvaluationType) {
    if (!this.isValidScore(newType)) {
      this.handleInvalidScore();
    }

    this._type = newType;
  }
}
