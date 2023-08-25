import { Injectable } from '@nestjs/common';
import { BaseMapper } from '../../../base/mapper/base-mapper';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../../graphql/entities/user.entity';
import { BaseUser } from '../../../base/entity/base-user';

@Injectable()
export class UserMapper implements BaseMapper<BaseUser, CreateUserDto> {
  toEntity(dto: CreateUserDto): BaseUser {
    return new User(
      null,
      dto.name,
      dto.document,
      dto.birthDate,
      dto.phones,
      dto.addresses,
    );
  }

  toCreateDTO(entity: BaseUser): CreateUserDto {
    return new CreateUserDto(
      entity.name,
      entity.document,
      entity.birthDate,
      entity.phones,
      entity.addresses,
    );
  }
}
