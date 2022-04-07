import Employee from './employee';
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
