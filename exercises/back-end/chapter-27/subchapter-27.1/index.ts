import Student from './Student';

const renatoBispo = new Student(1, 'Renato Bispo', [9.5, 7, 10, 8], [8, 9]);

console.log(renatoBispo);
console.log('exams avg:', renatoBispo.getExamsGradesAverage());
console.log('projects avg:', renatoBispo.getProjectsGradesAverage());
