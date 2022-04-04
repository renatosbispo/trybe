export default class Student {
  constructor(
    public id: number,
    public name: string,
    public examsGrades: [number, number, number, number],
    public projectsGrades: [number, number]
  ) {}

  private getGradesSum(grades: number[]) {
    return grades.reduce((total, grade) => total + grade);
  }

  private getGradesAverage(grades: number[]) {
    return this.getGradesSum(grades) / grades.length;
  }

  public getExamsGradesAverage() {
    return this.getGradesAverage(this.examsGrades);
  }

  public getProjectsGradesAverage() {
    return this.getGradesAverage(this.projectsGrades);
  }
}
