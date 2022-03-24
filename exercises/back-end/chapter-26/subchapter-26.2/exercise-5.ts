type FilterPredicate<U> = (item: U, index?: number, array?: U[]) => boolean;

function myFilter<T>(array: T[], predicate: FilterPredicate<T>): T[] {
  const filteredArray = [];

  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1) {
    const currentItem: T = array[arrayIndex];

    if (predicate(currentItem, arrayIndex, array)) {
      filteredArray.push(currentItem);
    }
  }

  return filteredArray;
}

const numArrayToBeFiltered: number[] = [10, 12, 25, 36, 40, 48, 52, 76, 100];
const numFilterPredicate: FilterPredicate<number> = (item) => item % 5 === 0;

console.log(myFilter(numArrayToBeFiltered, numFilterPredicate));

const stringArrayToBeFiltered: string[] = [
  'Apple',
  'Banana',
  'Guava',
  'Orange',
  'Peach',
  'Pineaple',
  'Strawberry',
];

const stringFilterPredicate: FilterPredicate<string> = (item, index) =>
  item.length < 7 && index! % 2 === 0;

console.log(myFilter(stringArrayToBeFiltered, stringFilterPredicate));
