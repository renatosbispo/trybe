export default class CustomDate {
  constructor(public day: number, public month: number, public year: number) {
    // if (!this.isValidDay || !this.isValidMonth || !this.isValidYear) {
    //   this.day = 1;
    //   this.month = 1;
    //   this.year = 1900;
    // }
  }

  public isLeapYear(candidateYear: number) {
    if (
      candidateYear % 400 === 0 ||
      (candidateYear % 4 === 0 && candidateYear % 100 !== 0)
    ) {
      return true;
    }

    return false;
  }

  private isValidDay() {
    const monthsLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (this.isLeapYear(this.year)) {
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
