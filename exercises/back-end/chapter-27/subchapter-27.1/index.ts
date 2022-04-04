import ExerciseHeader from './ExerciseHeader';
import Customer from './restaurant/Customer';
import Order from './restaurant/Order';
import OrderItem from './restaurant/OrderItem';
import PaymentOption from './restaurant/PaymentOption';
import Student from './Student';

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
