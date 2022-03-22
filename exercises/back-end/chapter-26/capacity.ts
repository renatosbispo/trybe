interface Units {
  [key: string]: number;
}

const units: Units = {
  kl: 10e3,
  hl: 10e2,
  dal: 10e1,
  l: 10,
  dl: 10e-1,
  cl: 10e-2,
  ml: 10e-3,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
