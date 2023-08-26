import { BasePhone } from '../../base/entity/base-phone';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePhoneInput implements BasePhone {
  @Field(() => String, { description: 'AreaCode of phone' })
  areaCode: string;

  @Field(() => String, { description: 'CountryCode of phone' })
  countryCode: string;

  @Field(() => String, { description: 'Number of phone' })
  number: string;
}
