export class User {
  constructor(
    public id: number,
    public name: string,
    public document: string,
    public birthDate: string,
    public phones: string[],
    public addresses: string[],
  ) {
    this.id = 1;
  }
}
