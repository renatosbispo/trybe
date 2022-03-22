interface Units {
  [key: string]: number;
}

const units: Units = {
  km2: 1e6,
  hm2: 1e4,
  dam2: 1e2,
  m2: 1,
  dm2: 1e-2,
  cm2: 1e-4,
  mm2: 1e-6,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
