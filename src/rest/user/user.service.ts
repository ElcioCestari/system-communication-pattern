import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserClient } from '../../client/user-client/user.client';

@Injectable()
export class UserService {
  constructor(private readonly userClient: UserClient) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Promise<CreateUserDto> {
    return this.userClient
      .get()
      .then((user) => user)
      .catch((err) => {
        throw err;
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
