type SliceAmount = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: SliceAmount;
}

const pepperoniPizza: Pizza = {
  flavor: 'Pepperoni',
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
