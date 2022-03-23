type Bird = {
  order: string;
  family: string;
  species: string;
  foundIn: string[];
  lengthRange: [min: number, max: number, unit: string];
};

type Add = (a: number, b: number) => number;

type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
};

const swallowTailedHummingbird: Bird = {
  order: 'Apodiformes',
  family: 'Trochilidae',
  species: 'Eupetomena macroura',
  foundIn: ['Bolivia', 'Brazil', 'Paraguay', 'Peru'],
  lengthRange: [15, 17, 'cm'],
};

const add: Add = (a, b) => a + b;

const googleSaoPauloAddress = {
  street: 'Av. Brg. Faria Lima',
  number: 3477,
  city: 'São Palo',
  state: 'São Palo',
  country: 'Brazil',
};

console.log('\nswallowTailedHummingbird (type Bird):', swallowTailedHummingbird);
console.log('\nadd(6, 4) (type Add) result:', add(6, 4));
console.log('\ngoogleSaoPauloAddress (type Address)', googleSaoPauloAddress);
