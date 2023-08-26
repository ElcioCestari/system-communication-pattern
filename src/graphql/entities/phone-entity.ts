import { BasePhone } from '../../base/entity/base-phone';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'A Phone' })
export class Phone implements BasePhone {
  @Field(() => String, { description: 'AreaCode of phone' })
  areaCode: string;

  @Field(() => String, { description: 'CountryCode of phone' })
  countryCode: string;

  @Field(() => String, { description: 'Number of phone' })
  number: string;
}
