import { v4 as uuid } from 'uuid';

export class User {
  constructor(
    public id: string,
    public name: string,
    public document: string,
    public birthDate: string,
    public phones: string[],
    public addresses: string[],
  ) {
    this.id = uuid();
  }
}
