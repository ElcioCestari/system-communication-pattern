import { Expose } from 'class-transformer';

export class CreateUserDto {
  @Expose({ name: 'name' }) readonly _name: string;
  @Expose({ name: 'document' }) readonly _document: string;
  @Expose({ name: 'birthDate' }) readonly _birthDate: string;
  @Expose({ name: 'phones' }) readonly _phones: string[];
  @Expose({ name: 'addresses' }) readonly _addresses: string[];

  constructor(
    name: string,
    document: string,
    birthDate: string,
    phones: string[],
    addresses: string[],
  ) {
    this._name = name;
    this._document = document;
    this._birthDate = birthDate;
    this._phones = phones;
    this._addresses = addresses;
  }

  get name(): string {
    return this._name;
  }

  get document(): string {
    return this._document;
  }

  get birthDate(): string {
    return this._birthDate;
  }

  get phones(): string[] {
    return this._phones;
  }

  get addresses(): string[] {
    return this._addresses;
  }
}
