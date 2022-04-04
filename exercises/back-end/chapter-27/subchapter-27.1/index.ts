import ExerciseHeader from './ExerciseHeader';
import CustomDate from './CustomDate';
import Customer from './restaurant/Customer';
import Order from './restaurant/Order';
import OrderItem from './restaurant/OrderItem';
import PaymentOption from './restaurant/PaymentOption';
import Student from './Student';
import SectionSeparator from './SectionSeparator';

// Exercises 1 - 2
new ExerciseHeader('Exercises 1 - 2');

const renatoBispo = new Student(1, 'Renato Bispo', [9.5, 7, 10, 8], [8, 9]);

console.log(renatoBispo);
console.log('Exams avg.:', renatoBispo.getExamsGradesAverage());
console.log('Projects avg.:', renatoBispo.getProjectsGradesAverage());

// Exercises 3 - 4
new ExerciseHeader('Exercises 3 - 4');

const customer = new Customer(1, 'Renato Bispo');

const orderItems = [
  new OrderItem('French Fries', 5.99, 2),
  new OrderItem('Original Coke', 2.99, 2),
];

const myOrder = new Order(customer.id, orderItems, PaymentOption.Cash, 0.25);

console.log('Order:', myOrder);
console.log('Order total with discount:', myOrder.getOrderTotalWithDiscount());

// Exercises 5 - 6
new ExerciseHeader('Exercises 5 - 6');

const validDate = new CustomDate(19, 10, 1996);

console.log('Valid date:', validDate);
console.log('Month name:', validDate.getMonthName());
console.log('Is leap year:', validDate.isLeapYear());

new SectionSeparator();

const invalidDate = new CustomDate(29, 2, 2022);

console.log('Invalid date:', invalidDate);
console.log('Month name:', invalidDate.getMonthName());
console.log('Is leap year:', invalidDate.isLeapYear());

new SectionSeparator();

const validDate2 = new CustomDate(
  validDate.day,
  validDate.month,
  validDate.year
);

const validDate3 = new CustomDate(20, 7, 1969);

const validDate4 = new CustomDate(13, 2, 2019);

console.log('Compare validDate and validDate2:', validDate.compare(validDate2));
console.log('Compare validDate and validDate3:', validDate.compare(validDate3));
console.log('Compare validDate and validDate4:', validDate.compare(validDate4));

new SectionSeparator();

console.log('Format date dd/mm/aaaa:', validDate.format('dd/mm/aaaa'));
console.log('Format date aa-mm-dd:', validDate.format('aa-mm-dd'));
console.log('Format date M dd, aaaa:', validDate.format('M dd, aaaa'));