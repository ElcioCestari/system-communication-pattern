import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserClient } from '../../client/user-client/user.client';
import { User } from '../../client/entity/user';

@Injectable()
export class UserService {
  constructor(private readonly client: UserClient) {}

  create(createUserInput: CreateUserInput) {
    return this.client.post({ ...createUserInput, id: null });
  }

  async findAll() {
    return this.client.get();
  }

  async findOne(id: number) {
    return this.client.getById('' + id);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    const newVar = { ...updateUserInput, id: id } as User;
    return this.client.put(id, newVar);
  }

  remove(id: number) {
    return this.client.delete(id);
  }
}
