import { Injectable } from '@nestjs/common';
import { BaseMapper } from '../../../base/mapper/base-mapper';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../../client/entity/user';

@Injectable()
export class UserMapper implements BaseMapper<User, CreateUserDto> {
  toEntity(dto: CreateUserDto): User {
    return new User(
      null,
      dto.name,
      dto.document,
      dto.birthDate,
      dto.phones,
      dto.addresses,
    );
  }

  toCreateDTO(entity: User): CreateUserDto {
    return new CreateUserDto(
      entity.name,
      entity.document,
      entity.birthDate,
      entity.phones,
      entity.addresses,
    );
  }
}
