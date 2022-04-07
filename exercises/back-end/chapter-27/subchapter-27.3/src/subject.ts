export default class Subject {
  protected minNameLength: number = 3;

  constructor(protected _name: string) {
    if (!this.isValidName()) {
      this.handleInvalidName();
    }
  }

  protected handleInvalidName(): void {
    throw new Error(
      `Name must have at least ${this.minNameLength} characters.`
    );
  }

  protected isValidName(name: string = this._name): boolean {
    return name.length >= this.minNameLength;
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