import AbstractEvaluation from './abstract-evaluation';
import Teacher from './teacher';
import PrintConstructorName from './types/PrintConstructorName';

export default class Exam extends AbstractEvaluation {
  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _score: number,
    public teacher: Teacher,
  ) {
    super(printConstructorName, _score, teacher, 'Exam', 25);
  }

  printPublicProperties(): void {}
}
