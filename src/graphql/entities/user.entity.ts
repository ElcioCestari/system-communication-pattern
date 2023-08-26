import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseUser } from '../../base/entity/base-user';
import { BasePhone } from '../../base/entity/base-phone';
import { Phone } from './phone-entity';

@ObjectType({ description: 'User object' })
export class User implements BaseUser {
  @Field(() => ID)
  readonly id: string;

  @Field(() => String, { description: 'Name of the user' })
  readonly name: string;

  @Field(() => String, { description: 'Document of the user' })
  readonly document: string;

  @Field(() => String, { description: 'Birthdate of the user' })
  readonly birthDate: string;

  @Field(() => [Phone], { description: 'List of phone numbers of the user' })
  readonly phones: Phone[];

  @Field(() => [String], { description: 'List of addresses of the user' })
  readonly addresses: string[];

  constructor(
    id: string,
    name: string,
    document: string,
    birthDate: string,
    phones: BasePhone[],
    addresses: string[],
  ) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.birthDate = birthDate;
    this.phones = <Phone[]>phones;
    this.addresses = addresses;
  }
}
