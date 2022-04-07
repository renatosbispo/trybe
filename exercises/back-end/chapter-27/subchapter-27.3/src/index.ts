import BetterStudent from './better-student';
import Employee from './employee';
import Evaluation from './evaluation';
import EvaluationResult from './evaluation-result';
import ConsoleHeader from './lib/console-header';
import Student from './student';
import Subject from './subject';
import Teacher from './teacher';

const validDate = new Date('October 19, 1996');
const validDate2 = new Date('April 4, 1998');
const validDate3 = new Date('June 2, 2018');
const futureDate = new Date('March 1, 2050');
const tooAncientDate = new Date('January 1, 1900');
const validExamsGrades = [8.5, 9, 8, 10];
const invalidExamsGrades = [8.5, 9, 8, 10, 9];
const validProjectsGrades = [10, 9.5];
const invalidProjectsGrades = [10, 9.5, 8];

// Exercise 2
ConsoleHeader.H2('Exercise 2');

const employee = new Employee(
  ConsoleHeader.H3,
  'Renato Bispo',
  validDate,
  validDate3,
  5000
);

// Throws error (name too short)
//
// new Employee(
//   ConsoleHeader.H3,
//   'Re',
//   validDate,
//   validDate3,
//   5000
// );
//
// employee.name = 'Re';

// Throws error (future birth date)
//
// new Employee(
//   ConsoleHeader.H3,
//   'Renato Bispo',
//   futureDate,
//   validDate3,
//   5000
// );

// Throws error (future admission date)
//
// new Employee(
//   ConsoleHeader.H3,
//   'Renato Bispo',
//   validDate,
//   futureDate,
//   5000
// );

// Throws error (negative salary)
//
// new Employee(
//   ConsoleHeader.H3,
//   'Renato Bispo',
//   validDate,
//   validDate3,
//   -1000
// );
//
// employee.salary = -1000;

// Throws compilation error (assignment to read-only property)
//
// employee.admissionDate = new Date();
// employee.age = 10;

employee.printInfo();

const math = new Subject('Mathematics');

// Throws error (name too short)
//
// new Subject('Ma');
// math.name = 'Ma';

const teacher = new Teacher(
  ConsoleHeader.H3,
  'Sofia',
  validDate2,
  validDate3,
  5000,
  math
);

// Throws compilation error (assignment to read-only property)
//
// teacher.enrollment = 'new-enrollment-string';

teacher.printInfo();

const student = new Student(
  ConsoleHeader.H3,
  'Aurora',
  validDate2,
  validExamsGrades,
  validProjectsGrades
);

// Throws error (invalid exams grades)
//
// new Student(
//   ConsoleHeader.H3,
//   'Aurora',
//   validDate2,
//   invalidExamsGrades,
//   validProjectsGrades
// );

// Throws error (invalid projects grades)
//
// new Student(
//   ConsoleHeader.H3,
//   'Aurora',
//   validDate2,
//   validExamsGrades,
//   invalidProjectsGrades
// );

student.printInfo();

// Exercise 3
ConsoleHeader.H2('Exercise 3');

const evaluation = new Evaluation(ConsoleHeader.H3, 40, teacher, 'Project');

// Throws error (invalid score)
//
// new Evaluation(ConsoleHeader.H3, -1, teacher, 'Project');
// new Evaluation(ConsoleHeader.H3, 51, teacher, 'Project');
// new Evaluation(ConsoleHeader.H3, -1, teacher, 'Exam');
// new Evaluation(ConsoleHeader.H3, 26, teacher, 'Exam');

evaluation.score = 20;
evaluation.type = 'Exam';

// Throws error (invalid score)
//
// evaluation.score = 30;
// evaluation.score = -1;

evaluation.type = 'Project';
evaluation.score = 45;

// Throws error (invalid score)
//
// evaluation.score = 51;
// evaluation.score = -1;

evaluation.printInfo();

const evaluationResult = new EvaluationResult(ConsoleHeader.H3, evaluation, 40);

// Throws error (invalid score)
//
// new EvaluationResult(
//   ConsoleHeader.H3,
//   evaluation,
//   55
// );
//
// new EvaluationResult(
//   ConsoleHeader.H3,
//   evaluation,
//   -1
// );

evaluationResult.printInfo();

const evaluation2 = new Evaluation(ConsoleHeader.H3, 25, teacher, 'Exam');

const evaluationResult2 = new EvaluationResult(
  ConsoleHeader.H3,
  evaluation2,
  20
);

const betterStudent = new BetterStudent(
  ConsoleHeader.H3,
  'Samanta',
  validDate2,
  [evaluationResult, evaluationResult2]
);

betterStudent.printInfo();
