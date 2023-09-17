import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRequest } from './create-user.request';

export class UpdateUserDto extends PartialType(CreateUserRequest) {
  id: number;
}
