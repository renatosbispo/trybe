interface Units {
  [key: string]: number;
}

const units: Units = {
  km: 1e3,
  hm: 1e2,
  dam: 1e1,
  m: 1,
  dm: 1e-1,
  cm: 1e-2,
  mm: 1e-3,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
