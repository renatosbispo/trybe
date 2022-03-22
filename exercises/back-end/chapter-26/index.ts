import convertLength = require('./length');
import convertMass = require('./mass');
import convertCapacity = require('./capacity');
import convertVolume = require('./volume');
import convertArea = require('./area');
import mmorpg = require('./exercise-6');

type UnitConverterParams = [
  value: number,
  baseUnit: string,
  targetUnit: string
];

interface UnitConverter {
  (...params: UnitConverterParams): number;
}

function testUnitConverter(
  unitConverter: UnitConverter,
  ...unitConverterParams: UnitConverterParams
): void {
  const convertedValue: number = unitConverter(...unitConverterParams);
  const [value, baseUnit, targetUnit]: UnitConverterParams =
    unitConverterParams;

  console.log(
    `${unitConverter.name}:`,
    `${value}${baseUnit} = ${convertedValue}${targetUnit}`
  );
}

function printSeparator() {
  console.log('-----------');
}

testUnitConverter(convertLength, 25, 'dam', 'm');
printSeparator();
testUnitConverter(convertMass, 50, 'kg', 'hg');
printSeparator();
testUnitConverter(convertCapacity, 4.2, 'ml', 'dal');
printSeparator();
testUnitConverter(convertVolume, 16, 'dam3', 'mm3');
printSeparator();
testUnitConverter(convertArea, 100, 'cm2', 'km2');

printSeparator();

const { characters, printCharacter } = mmorpg;

characters.forEach(printCharacter);