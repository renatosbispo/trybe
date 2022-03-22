interface Units {
  [key: string]: number;
}

const units: Units = {
  km: 10e3,
  hm: 10e2,
  dam: 10e1,
  m: 10,
  dm: 10e-1,
  cm: 10e-2,
  mm: 10e-3,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
