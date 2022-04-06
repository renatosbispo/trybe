export default class SectionSeparator {
  constructor(private size: number = 6, private separatorChar: string = '-') {
    const separator = this.buildSeparator();
    console.log(`\n${separator}\n`);
  }

  private buildSeparator() {
    let separator = '';

    for (let index = 0; index < this.size; index += 1) {
      separator += this.separatorChar;
    }

    return separator;
  }
}
