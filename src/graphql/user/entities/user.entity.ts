import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User object' })
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String, { description: 'Name of the user' })
  name: string;

  @Field(() => String, { description: 'Document of the user' })
  document: string;

  @Field(() => String, { description: 'Birthdate of the user' })
  birthDate: string;

  @Field(() => [String], { description: 'List of phone numbers of the user' })
  phones: string[];

  @Field(() => [String], { description: 'List of addresses of the user' })
  addresses: string[];
}
