import AbstractEvaluation from './abstract-evaluation';
import Teacher from './teacher';
import PrintConstructorName from '../types/PrintConstructorName';

export default class Project extends AbstractEvaluation {
  constructor(
    protected printConstructorName: PrintConstructorName,
    protected _score: number,
    public teacher: Teacher,
  ) {
    super(printConstructorName, _score, teacher, 'Project', 50);
  }

  printPublicProperties(): void {}
}
