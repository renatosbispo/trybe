export default class ConsoleHeader {
  constructor(protected header: string, protected separatorChar: string = '=') { }

  protected buildSeparator() {
    let separator = '';

    for (let index = 0; index < this.header.length; index += 1) {
      separator += this.separatorChar;
    }

    return separator;
  }

  protected printHeader() {
    const separator = this.buildSeparator();

    console.log(`\n${this.header}`);
    console.log(`${separator}\n`);
  }
}
