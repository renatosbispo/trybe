enum CarColor {
  Black = 'Black',
  Red = 'Red',
  White = 'White',
  Silver = 'Silver',
}

enum CarDoor {
  FrontLeft = 'FrontLeft',
  FrontRight = 'FrontRight',
  RearLeft = 'RearLeft',
  RearRight = 'RearRight',
}

enum TurnDirection {
  Left = 'Left',
  Right = 'Right',
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

  constructor(brand: string, color: CarColor, doors: number) {
    this.#brand = brand;
    this.#color = color;
    this.#doors = doors;
  }

  honk(): void {
    console.log('Honk!');
  }

  openTheDoor(door: CarDoor): void {
    console.log(`Opening ${door} door...`);
  }

  closeTheDoor(door: CarDoor): void {
    console.log(`Closing ${door} door...`);
  }

  turnOn(): void {
    console.log('Turning car on...');
  }

  turnOff(): void {
    console.log('Turning car off...');
  }

  speedUp(): void {
    console.log('Speeding car up...');
  }

  speedDown(): void {
    console.log('Speeding car down...');
  }

  stop(): void {
    console.log('Stoping car...');
  }

  turn(direction: TurnDirection): void {
    console.log(`Turning car to the ${direction}`);
  }
}
