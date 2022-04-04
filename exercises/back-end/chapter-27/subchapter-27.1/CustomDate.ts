export default class CustomDate {
  constructor(public day: number, public month: number, public year: number) {
    if (!this.isValidDate()) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    }
  }

  public compare(date: CustomDate) {
    const yearDiff = this.year - date.year;

    if (yearDiff !== 0) {
      return yearDiff / Math.abs(yearDiff);
    }

    const monthDiff = this.month - date.month;

    if (monthDiff !== 0) {
      return monthDiff / Math.abs(monthDiff);
    }

    const dayDiff = this.day - date.day;

    if (monthDiff !== 0) {
      return dayDiff / Math.abs(dayDiff);
    }

    return 0;
  }

  public format(pattern: string) {
    const formattedDate = pattern
      .replace('aaaa', String(this.year))
      .replace('aa', String(this.year).slice(2))
      .replace('mm', `0${String(this.month)}`.slice(-2))
      .replace('M', this.getMonthName())
      .replace('dd', `0${String(this.day)}`.slice(-2));

    return formattedDate;
  }

  public getMonthName() {
    const monthsNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return monthsNames[this.month - 1];
  }

  public isLeapYear() {
    if (
      this.year % 400 === 0 ||
      (this.year % 4 === 0 && this.year % 100 !== 0)
    ) {
      return true;
    }

    return false;
  }

  private isValidDate() {
    return this.isValidDay() && this.isValidMonth() && this.isValidYear();
  }

  private isValidDay() {
    const monthsLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (this.isLeapYear()) {
      monthsLengths[1] = 29;
    }

    return (
      Number.isInteger(this.day) &&
      this.day > 0 &&
      this.day <= monthsLengths[this.month - 1]
    );
  }

  private isValidMonth() {
    return Number.isInteger(this.month) && this.month > 0 && this.month < 13;
  }

  private isValidYear() {
    const minYear = 1899;
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 101;

    return (
      Number.isInteger(this.year) && this.year > minYear && this.year < maxYear
    );
  }
}
