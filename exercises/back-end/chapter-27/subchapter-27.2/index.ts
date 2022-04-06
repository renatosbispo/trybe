import ExerciseHeader from './ExerciseHeader';
import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const validDate = new Date('October 19, 1996');
const validDate2 = new Date('April 4, 1998');
const futureDate = new Date('March 1, 2050');
const tooAncientDate = new Date('January 1, 1900');
const validExamsGrades = [8.5, 9, 8, 10];
const invalidExamsGrades = [8.5, 9, 8, 10, 9];
const validProjectsGrades = [10, 9.5];
const invalidProjectsGrades = [10, 9.5, 8];

// Exercise 1
new ExerciseHeader('Exercise 1');

const person = new Person('Renato Bispo', validDate);

// Throws compilation error (assignement to read-only property)
// person.age = 18;

// Throws error (name too short)
// person.name = 'Re';

person.printInfo();

// Throws error (name too short)
// new Person('A', validDate2);

// Throws error (future birth date)
// new Person('Ana', futureDate);

// Throws error (age greater than max allowed)
// new Person('Sofia', tooAncientDate);

// Exercise 2
new ExerciseHeader('Exercise 2');

const student = new Student(
  'Sofia',
  validDate2,
  validExamsGrades,
  validProjectsGrades
);

// Throws compilation error (assignement to read-only property)
// student.id = 'new-id';

student.printInfo();

// Throws error (too many exams grades)
// new Student(
//   'Ana',
//   new Date(validDate2),
//   invalidExamsGrades,
//   validProjectsGrades
// );

// Throws error (too many projects grades)
// new Student(
//   'Sofia',
//   new Date(validDate2),
//   validExamsGrades,
//   invalidProjectsGrades
// );

// Exercise 4
new ExerciseHeader('Exercise 4');

const math = new Subject('Mathematics');
const history = new Subject('History');

// Throws error (name too short)
// math.name = 'Ma';
// history.name = 'Hi';

math.printInfo();
history.printInfo();

// Exercise 5
new ExerciseHeader('Exercise 5');

const thales = new Teacher(
  'Thales of Miletus',
  validDate,
  validDate2,
  5000,
  math
);

// Throws error (future admission date)
// new Teacher('Herodotus', validDate, futureDate, 5000, history);

// Throws error (name too short)
//  new Teacher('He', validDate, validDate2, 5000, history);

// Throws compilation error (assignement to read-only property)
// thales.admissionDate = new Date();
// thales.age = 50;
// thales.registration = 'new-registration-string';

// Throws error (name too short)
// thales.name = 'Th';

// Throws error (negative salary)
// thales.salary = -5000;

thales.printInfo();
