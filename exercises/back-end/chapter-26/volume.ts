interface Units {
  [key: string]: number;
}

const units: Units = {
  km3: 1e9,
  hm3: 1e6,
  dam3: 1e3,
  m3: 1,
  dm3: 1e-3,
  cm3: 1e-6,
  mm3: 1e-9,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
