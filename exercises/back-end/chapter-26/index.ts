import area = require('./area');
import capacity = require('./capacity');
import length = require('./length');
import mass = require('./mass');
import volume = require('./volume');
import mmorpg = require('./exercise-6');
import readlineSync from 'readline-sync';

interface UnitConverter {
  convert: Function;
  units: string[];
}
interface UnitConverters {
  [key: string]: UnitConverter;
}

const unitConverters: UnitConverters = {
  area: {
    convert: area.convert,
    units: Object.keys(area.units),
  },
  capacity: {
    convert: capacity.convert,
    units: Object.keys(capacity.units),
  },
  length: {
    convert: length.convert,
    units: Object.keys(length.units),
  },
  mass: {
    convert: mass.convert,
    units: Object.keys(mass.units),
  },
  volume: {
    convert: volume.convert,
    units: Object.keys(volume.units),
  },
};

function execConversion(
  selectedOption: string,
  value: number,
  baseUnit: string,
  targetUnit: string
) {
  let convertedValue: number = unitConverters[selectedOption].convert(
    value,
    baseUnit,
    targetUnit
  );

  console.log(`${value}${baseUnit} = ${convertedValue}${targetUnit}`);
}

const converterOptions: string[] = Object.keys(unitConverters);

const selectedConverterIndex: number = readlineSync.keyInSelect(
  converterOptions,
  'Choose the converter: '
);

const selectedConverter = converterOptions[selectedConverterIndex];
const selectedConverterUnits = unitConverters[selectedConverter].units;

const value = readlineSync.questionFloat('Enter value: ');

const selectedBaseUnitIndex = readlineSync.keyInSelect(
  selectedConverterUnits,
  "What's the base unit?"
);

const selectedBaseUnit = selectedConverterUnits[selectedBaseUnitIndex];

const selectedTargetUnitIndex = readlineSync.keyInSelect(
  selectedConverterUnits,
  "What's the target unit?"
);

const selectedTargetUnit = selectedConverterUnits[selectedTargetUnitIndex];

execConversion(
  selectedConverter,
  value,
  selectedBaseUnit,
  selectedTargetUnit
);
