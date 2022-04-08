import BetterStudent from './school-system/better-student';
import BetterStudent2 from './school-system/better-student-2';
import Employee from './school-system/employee';
import Evaluation from './school-system/evaluation';
import EvaluationResult from './school-system/evaluation-result';
import EvaluationResult2 from './school-system/evaluation-result-2';
import Exam from './school-system/exam';
import ConsoleHeader from './lib/console-header';
import Project from './school-system/project';
import Student from './school-system/student';
import Subject from './school-system/subject';
import Teacher from './school-system/teacher';
import OrderItem from './school-system/restaurant/order-item';
import Order from './school-system/restaurant/order';
import OrderHistory from './school-system/restaurant/order-history';

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

// Exercise 4
ConsoleHeader.H2('Exercise 4');

const exam = new Exam(ConsoleHeader.H3, 20, teacher);
const project = new Project(ConsoleHeader.H3, 40, teacher);

// Throws error (invalid score)
//
// new Exam(ConsoleHeader.H3, -1, teacher);
// new Exam(ConsoleHeader.H3, 30, teacher);
// new Project(ConsoleHeader.H3, -1, teacher);
// new Project(ConsoleHeader.H3, 60, teacher);

const examResult = new EvaluationResult2(ConsoleHeader.H3, exam, 15);

const projectResult = new EvaluationResult2(ConsoleHeader.H3, project, 35);

const betterStudent2 = new BetterStudent2(
  ConsoleHeader.H3,
  'Renato Bispo',
  validDate,
  [examResult, projectResult]
);

exam.printInfo();
project.printInfo();

betterStudent2.printInfo();

// Exercise 5
ConsoleHeader.H2('Exercise 5');

const orderItem = new OrderItem('Coke', 2.99, 2);
const orderItem2 = new OrderItem('Hamburguer', 4.99, 2);
const orderItem3 = new OrderItem('Orange Juice', 1.99, 1);
const orderItem4 = new OrderItem('Brownie', 1.59, 2);

// Throws error (invalid name or price)
//
// new OrderItem('Co', 2.99, 2);
// orderItem.name = 'Co';
// new OrderItem('Coke', -1, 2);
// orderItem.price = -1;

const order = new Order(
  ConsoleHeader.H3,
  betterStudent2,
  [orderItem, orderItem2],
  'Cash',
  0.25
);

// Throws error (invalid items or discount)
//
// new Order(ConsoleHeader.H3, betterStudent2, [], 'Cash', 0.25);
// order.items = [];
// new Order(ConsoleHeader.H3, betterStudent2, [orderItem, orderItem2], 'Cash', -1);
// order.discount = -1;

order.printInfo();

const order2 = new Order(
  ConsoleHeader.H3,
  teacher,
  [orderItem3, orderItem4],
  'DebitCard',
  0.1
);

order2.printInfo();

// Exercise 6
ConsoleHeader.H3('Exercise 6');

const orderHistory = new OrderHistory([order, order2]);

ConsoleHeader.H3('listByCustomer');

orderHistory.listByCustomer(teacher);

ConsoleHeader.H3('listBySortedValue');

orderHistory.listBySortedValue('DESC');

ConsoleHeader.H3('addOrder');

const teacher2 = new Teacher(
  ConsoleHeader.H3,
  'Isaac',
  validDate,
  validDate3,
  5000,
  new Subject('History')
);

const orderItem5 = new OrderItem('Mate Tea', 2.99, 1);
const orderItem6 = new OrderItem('Croissant', 4.59, 2);

orderHistory.addOrder(
    new Order(
    ConsoleHeader.H3,
    teacher2,
    [orderItem5, orderItem6],
    'CredictCard',
    0.15
  )
);

orderHistory.listBySortedValue('ASC');

ConsoleHeader.H3('removeOrder');

orderHistory.removeOrder(order, order2);
orderHistory.listBySortedValue('ASC');