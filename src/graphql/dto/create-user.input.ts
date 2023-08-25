import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name of the service' })
  name: string;

  @Field(() => String, { description: 'Document of the service' })
  document: string;

  @Field(() => String, { description: 'Birthdate of the service' })
  birthDate: string;

  @Field(() => [String], { description: 'List of phone numbers of the service' })
  phones: string[];

  @Field(() => [String], { description: 'List of addresses of the service' })
  addresses: string[];
}
