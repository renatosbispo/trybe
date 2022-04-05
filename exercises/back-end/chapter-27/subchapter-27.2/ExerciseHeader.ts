export default class ExerciseHeader {
  constructor(private header: string, private separatorChar: string = '=') {
    this.printHeader();
  }

  private buildSeparator() {
    let separator = '';

    for (let index = 0; index < this.header.length; index += 1) {
      separator += this.separatorChar;
    }

    return separator;
  }

  private printHeader() {
    const separator = this.buildSeparator();

    console.log();
    console.log(this.header);
    console.log(separator);
    console.log();
  }
}
