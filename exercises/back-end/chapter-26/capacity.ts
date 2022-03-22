interface Units {
  [key: string]: number;
}

const units: Units = {
  kl: 1e3,
  hl: 1e2,
  dal: 1e1,
  l: 1,
  dl: 1e-1,
  cl: 1e-2,
  ml: 1e-3,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
