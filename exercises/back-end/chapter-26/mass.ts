interface Units {
  [key: string]: number;
}

const units: Units = {
  kg: 1e3,
  hg: 1e2,
  dag: 1e1,
  g: 1,
  dg: 1e-1,
  cg: 1e-2,
  mg: 1e-3,
};

function convert(value: number, baseUnit: string, targetUnit: string): number {
  return (value * units[baseUnit]) / units[targetUnit];
}

export = {
  convert,
  units,
};
