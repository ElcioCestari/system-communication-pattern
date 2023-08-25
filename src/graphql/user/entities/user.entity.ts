import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseUser } from '../../../client/entity/base-user';

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

  @Field(() => [String], { description: 'List of phone numbers of the user' })
  readonly phones: string[];

  @Field(() => [String], { description: 'List of addresses of the user' })
  readonly addresses: string[];

  constructor(
    id: string,
    name: string,
    document: string,
    birthDate: string,
    phones: string[],
    addresses: string[],
  ) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.birthDate = birthDate;
    this.phones = phones;
    this.addresses = addresses;
  }
}
