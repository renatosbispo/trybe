/* Exercise 3 */

type SliceAmount = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: SliceAmount;
}

const calabresaPizza: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const margheritaPizza: Pizza = {
  flavor: 'Margherita',
  slices: 6,
};

const nutellaPizza: Pizza = {
  flavor: 'Nutella',
  slices: 4,
};

/* Exercise 4 */

type RegularPizzaFlavor = 'Diavola' | 'Calabresa' | 'Chicken';
interface RegularPizza extends Pizza {
  flavor: RegularPizzaFlavor;
}

const diavolaPizza: RegularPizza = {
  flavor: 'Diavola',
  slices: 4,
};

const anotherCalabresaPizza: RegularPizza = {
  flavor: 'Calabresa',
  slices: 6,
};

const chickenPizza: RegularPizza = {
  flavor: 'Chicken',
  slices: 8,
};

type VegetarianPizzaFlavor = 'Margherita' | 'Heart of palm' | 'Mushroom';
interface VegetarianPizza extends Pizza {
  flavor: VegetarianPizzaFlavor;
}

const anotherMargheritaPizza: VegetarianPizza = {
  flavor: 'Margherita',
  slices: 4,
};

const mushroomPizza: VegetarianPizza = {
  flavor: 'Mushroom',
  slices: 6,
};

type SweetPizzaFlavor = 'Nutella' | 'Guava paste and cheese' | 'Marshmallow';
interface SweetPizza extends Pizza {
  flavor: SweetPizzaFlavor;
  slices: 4;
}

const marshmallowPizza: SweetPizza = {
  flavor: 'Marshmallow',
  slices: 4,
};
