import { Expose } from 'class-transformer';
import { BasePhone } from '../../base/entity/base-phone';

export class CreateUserDto {
  @Expose({ name: 'name' }) private readonly _name: string;
  @Expose({ name: 'document' }) private readonly _document: string;
  @Expose({ name: 'birthDate' }) private readonly _birthDate: string;
  @Expose({ name: 'phones' }) private readonly _phones: BasePhone[];
  @Expose({ name: 'addresses' }) private readonly _addresses: string[];

  constructor(
    name: string,
    document: string,
    birthDate: string,
    phones: BasePhone[],
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

  get phones(): BasePhone[] {
    return this._phones;
  }

  get addresses(): string[] {
    return this._addresses;
  }
}
