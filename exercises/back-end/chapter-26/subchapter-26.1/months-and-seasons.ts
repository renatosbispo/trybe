import readlineSync from 'readline-sync';

enum Months {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}

enum Seasons {
  Autumn = 'Autumn',
  Spring = 'Spring',
  Summer = 'Summer',
  Winter = 'Winter',
}

interface SingleHemisphereSeasons {
  [Seasons.Autumn]: Months[];
  [Seasons.Spring]: Months[];
  [Seasons.Summer]: Months[];
  [Seasons.Winter]: Months[];
}

interface HemispheresSeasons {
  [key: string]: SingleHemisphereSeasons;
}

const months = Object.values(Months);

const seasonsNorth: SingleHemisphereSeasons = {
  [Seasons.Autumn]: [
    Months.September,
    Months.October,
    Months.November,
    Months.December,
  ],
  [Seasons.Spring]: [Months.March, Months.April, Months.May, Months.June],
  [Seasons.Summer]: [Months.June, Months.July, Months.August, Months.September],
  [Seasons.Winter]: [
    Months.December,
    Months.January,
    Months.February,
    Months.March,
  ],
};

const seasonsSouth: SingleHemisphereSeasons = {
  [Seasons.Autumn]: seasonsNorth[Seasons.Spring],
  [Seasons.Spring]: seasonsNorth[Seasons.Autumn],
  [Seasons.Summer]: seasonsNorth[Seasons.Winter],
  [Seasons.Winter]: seasonsNorth[Seasons.Summer],
};

const hemispheresSeasons: HemispheresSeasons = {
  North: seasonsNorth,
  South: seasonsSouth,
};

const hemispheresNames = Object.keys(hemispheresSeasons);

(() => {
  const selectedMonthIndex: number = readlineSync.keyInSelect(
    months,
    'Choose the month'
  );

  if (selectedMonthIndex === -1) {
    console.log('Exiting...');

    return;
  }

  const selectedHemisphereIndex: number = readlineSync.keyInSelect(
    hemispheresNames,
    'Choose the hemisphere'
  );

  if (selectedHemisphereIndex === -1) {
    console.log('Exiting...');

    return;
  }

  const selectedMonth = months[selectedMonthIndex];
  const selectedHemisphere: string = hemispheresNames[selectedHemisphereIndex];
  const selectedHemisphereSeasons = hemispheresSeasons[selectedHemisphere];

  const selectedMonthSeasons = Object.entries(selectedHemisphereSeasons).reduce(
    (currentSelectedMonthsSeasons: string[], [season, months]) => {
      if (months.includes(selectedMonth)) {
        return [...currentSelectedMonthsSeasons, season];
      }

      return currentSelectedMonthsSeasons;
    },
    []
  );

  console.log('------------');
  console.log('Month:', selectedMonth);
  console.log('Hemisphere:', selectedHemisphere);
  console.log('Seasons:', selectedMonthSeasons.join(', '));
})();
