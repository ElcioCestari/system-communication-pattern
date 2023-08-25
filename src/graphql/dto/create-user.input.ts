import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name of the user' })
  name: string;

  @Field(() => String, { description: 'Document of the user' })
  document: string;

  @Field(() => String, { description: 'Birthdate of the user' })
  birthDate: string;

  @Field(() => [String], {
    description: 'List of phone numbers of the user',
  })
  phones: string[];

  @Field(() => [String], { description: 'List of addresses of the user' })
  addresses: string[];
}
