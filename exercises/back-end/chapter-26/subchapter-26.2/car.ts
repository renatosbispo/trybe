function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export enum CarColor {
  Black = 'Black',
  Red = 'Red',
  White = 'White',
  Silver = 'Silver',
}

export enum CarDoor {
  FrontLeft = 'FrontLeft',
  FrontRight = 'FrontRight',
  RearLeft = 'RearLeft',
  RearRight = 'RearRight',
}

export enum TurnDirection {
  Left = 'Left',
  Right = 'Right',
}

export enum DistanceUnit {
  km = 'km',
  m = 'm',
}

interface ICar {
  honk(): void;
  openTheDoor(door: CarDoor): void;
  closeTheDoor(door: CarDoor): void;
  turnOn(): void;
  turnOff(): void;
  speedUp(): void;
  speedDown(): void;
  stop(): void;
  turn(direction: TurnDirection): void;
}

export class Car implements ICar {
  #brand: string;
  #color: CarColor;
  #doors: number;
  #actionTime: number = 2000;
  #delayBeforeNextAction: number = 1500;
  #logAction = (message: string): void => console.log(`\n${message}`);

  constructor(brand: string, color: CarColor, doors: number) {
    this.#brand = brand;
    this.#color = color;
    this.#doors = doors;
  }

  honk(): void {
    this.#logAction('Honk!');
  }

  async openTheDoor(door: CarDoor): Promise<void> {
    this.#logAction(`Opening ${door} door...`);

    await sleep(this.#actionTime);

    console.log(`${door} door opened.`);

    await sleep(this.#delayBeforeNextAction);
  }

  async closeTheDoor(door: CarDoor): Promise<void> {
    this.#logAction(`Closing ${door} door...`);

    await sleep(this.#actionTime);

    console.log(`${door} door closed.`);

    await sleep(this.#delayBeforeNextAction);
  }

  async turnOn(): Promise<void> {
    this.#logAction('Turning car on...');

    await sleep(this.#actionTime);

    console.log('Car is on.');

    await sleep(this.#delayBeforeNextAction);
  }

  async turnOff(): Promise<void> {
    this.#logAction('Turning car off...');

    await sleep(this.#actionTime);

    console.log('Car is off.');

    await sleep(this.#delayBeforeNextAction);
  }

  async speedUp(): Promise<void> {
    this.#logAction('Speeding car up...');

    await sleep(this.#actionTime);
  }

  async speedDown(): Promise<void> {
    this.#logAction('Speeding car down...');

    await sleep(this.#actionTime);
  }

  async stop(): Promise<void> {
    this.#logAction('Stoping car...');

    await sleep(this.#actionTime);

    console.log('Car stopped.');

    await sleep(this.#delayBeforeNextAction);
  }

  async turn(direction: TurnDirection): Promise<void> {
    this.#logAction(`Turning car to the ${direction}...`);

    await sleep(this.#actionTime);

    console.log('Car is done turning.');

    await sleep(this.#delayBeforeNextAction);
  }

  async goStraight(distance: number, unit: DistanceUnit) {
    this.#logAction(`Going straight for ${distance}${unit}...`);

    const travelTime: number =
      this.#actionTime *
      (1 + (unit === DistanceUnit.m ? distance / 1000 : distance));

    await sleep(travelTime);

    console.log(`Finished going straight for ${distance}${unit}.`);

    await sleep(this.#delayBeforeNextAction);
  }
}
