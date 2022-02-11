export = function convertVolume(value: number, baseUnit: string, targetUnit: string): number {
  interface Units {
    [key: string]: number;
  }

  const units: Units = {
    km3: 10e3,
    hm3: 10e2,
    dam3: 10e1,
    m3: 10,
    dm3: 10e-1,
    cm3: 10e-2,
    mm3: 10e-3,
  };

  return (value * units[baseUnit]) / units[targetUnit];
}
