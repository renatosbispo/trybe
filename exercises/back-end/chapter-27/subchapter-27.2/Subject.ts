export default class Subject {
  protected minNameLength: number = 3;

  constructor(protected _name: string) {
    if (!this.isValidName()) {
      this.handleInvalidName();
    }
  }

  protected buildSeparator(header: string, separatorChar: string = '-') {
    let separator = '';

    for (let index = 0; index < header.length; index += 1) {
      separator += separatorChar;
    }

    return separator;
  }

  protected handleInvalidName(): void {
    throw new Error(
      `Name must have at least ${this.minNameLength} characters.`
    );
  }

  protected isValidName(name: string = this._name): boolean {
    return name.length >= this.minNameLength;
  }

  public printInfo(lineEnd: string = '\n'): void {
    console.log(this.constructor.name);
    console.log(this.buildSeparator(this.constructor.name));
    console.log('Name:', this._name, lineEnd);
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (!this.isValidName(newName)) {
      this.handleInvalidName();
    }

    this._name = newName;
  }
}