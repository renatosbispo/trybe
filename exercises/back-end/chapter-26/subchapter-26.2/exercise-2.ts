import { Car, CarColor, CarDoor, DistanceUnit, TurnDirection } from './car';

function logJourneyStep(message: string): void {
  let separator = '';
  const separatorChar = '=';

  for (
    let currentSeparatorSize = 0;
    currentSeparatorSize < message.length;
    currentSeparatorSize++
  ) {
    separator += separatorChar;
  }

  console.log(`\n${separator}`);
  console.log(message);
  console.log(separator);
}

const gol = new Car('Volkswagen', CarColor.Silver, 4);

(async () => {
  logJourneyStep('Starting journey');

  await gol.openTheDoor(CarDoor.FrontLeft);
  await gol.closeTheDoor(CarDoor.FrontLeft);
  await gol.turnOn();
  await gol.speedUp();
  await gol.goStraight(600, DistanceUnit.m);
  await gol.speedDown();
  await gol.turn(TurnDirection.Left);
  await gol.speedUp();
  await gol.goStraight(200, DistanceUnit.m);
  await gol.speedDown();
  await gol.turn(TurnDirection.Right);
  await gol.speedUp();
  await gol.goStraight(1.5, DistanceUnit.km);
  await gol.speedDown();
  await gol.turn(TurnDirection.Right);
  await gol.speedUp();
  await gol.goStraight(400, DistanceUnit.m);
  await gol.speedDown();
  await gol.stop();

  logJourneyStep('Picking up passenger');

  await gol.openTheDoor(CarDoor.RearRight);
  await gol.closeTheDoor(CarDoor.RearRight);

  logJourneyStep('Continuing journey')

  await gol.speedUp();
  await gol.goStraight(300, DistanceUnit.m);
  await gol.speedDown();
  await gol.turn(TurnDirection.Right);
  await gol.speedUp();
  await gol.goStraight(2.2, DistanceUnit.km);
  await gol.speedDown();
  await gol.turn(TurnDirection.Left);
  await gol.speedUp();
  await gol.goStraight(400, DistanceUnit.m);
  await gol.speedDown();
  await gol.turn(TurnDirection.Right);
  await gol.goStraight(100, DistanceUnit.m);
  await gol.stop();

  logJourneyStep('End of Journey');
})();
