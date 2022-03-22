interface Units {
  [key: string]: number;
}

const units: Units = {
  km2: 10e3,
  hm2: 10e2,
  dam2: 10e1,
  m2: 10,
  dm2: 10e-1,
  cm2: 10e-2,
  mm2: 10e-3,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
