export default class Subject {
  protected minNameLength: number = 3;

  constructor(protected _name: string) {
    this.name = this._name;
  }

  protected handleInvalidName(): void {
    throw new Error(
      `Subject name must have at least ${this.minNameLength} characters.`
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