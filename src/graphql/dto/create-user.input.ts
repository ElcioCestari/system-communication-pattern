import { Field, InputType } from '@nestjs/graphql';
import { BasePhone } from '../../base/entity/base-phone';
import { CreatePhoneInput } from './create-phone.input';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name of the user' })
  name: string;

  @Field(() => String, { description: 'Document of the user' })
  document: string;

  @Field(() => String, { description: 'Birthdate of the user' })
  birthDate: string;

  @Field(() => [CreatePhoneInput], {
    description: 'List of phone numbers of the user',
  })
  phones: BasePhone[];

  @Field(() => [String], { description: 'List of addresses of the user' })
  addresses: string[];
}
