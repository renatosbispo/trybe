export default class Student {
  constructor(
    public id: number,
    public name: string,
    public examsGrades: [number, number, number, number],
    public projectsGrades: [number, number]
  ) {}
}
