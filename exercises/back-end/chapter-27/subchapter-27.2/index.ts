import ExerciseHeader from './ExerciseHeader';
import Person from './Person';

// Exercise 1
new ExerciseHeader('Exercise 1');

const person = new Person('Renato Bispo', new Date('October 19, 1996'));

person.printInfo();

// Throws error (name too short)
// new Person('A', new Date('April 4, 1998'));

// Throws error (future birth date)
// new Person('Ana', new Date('March 1, 2050'));

// Throws error (age greater than max allowed)
// new Person('Sofia', new Date('January 1, 1900'));
