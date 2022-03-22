interface Units {
  [key: string]: number;
}

const units: Units = {
  kg: 10e3,
  hg: 10e2,
  dag: 10e1,
  g: 10,
  dg: 10e-1,
  cg: 10e-2,
  mg: 10e-3,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
