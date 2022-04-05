import ExerciseHeader from './ExerciseHeader';
import Person from './Person';
import Student from './Student';

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

// Throws error (cannot set age)
// person.age = 18;

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
  'Renato Bispo',
  new Date('October 19, 1996'),
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
