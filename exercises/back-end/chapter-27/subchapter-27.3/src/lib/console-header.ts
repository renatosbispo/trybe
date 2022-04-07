enum DefaultSeparatorChar {
  H1 = '=',
  H2 = '-',
  H3 = '.',
}

export default class ConsoleHeader {
  public static readonly DefaultSeparatorChar = DefaultSeparatorChar;

  constructor(
    protected h1SeparatorChar: string = ConsoleHeader.DefaultSeparatorChar.H1,
    protected h2SeparatorChar: string = ConsoleHeader.DefaultSeparatorChar.H2,
    protected h3SeparatorChar: string = ConsoleHeader.DefaultSeparatorChar.H3
  ) {}

  protected static buildSeparator(headerLength: number, separatorChar: string) {
    let separator = '';

    const parsedSeparatorChar =
      separatorChar.length > 1 ? separatorChar[0] : separatorChar;

    for (let index = 0; index < headerLength; index += 1) {
      separator += parsedSeparatorChar;
    }

    return separator;
  }

  protected static printHeader(header: string, separatorChar: string) {
    const separator = this.buildSeparator(header.length, separatorChar);

    console.log(`${header}`);
    console.log(`${separator}\n`);
  }

  public static H1(header: string): void {
    ConsoleHeader.printHeader(header, ConsoleHeader.DefaultSeparatorChar.H1);
  }

  public H1(header: string): void {
    ConsoleHeader.printHeader(header, this.h1SeparatorChar);
  }

  public static H2(header: string): void {
    ConsoleHeader.printHeader(header, ConsoleHeader.DefaultSeparatorChar.H2);
  }

  public H2(header: string): void {
    ConsoleHeader.printHeader(header, this.h2SeparatorChar);
  }

  public static H3(header: string): void {
    ConsoleHeader.printHeader(header, ConsoleHeader.DefaultSeparatorChar.H3);
  }

  public H3(header: string): void {
    ConsoleHeader.printHeader(header, this.h3SeparatorChar);
  }
}
