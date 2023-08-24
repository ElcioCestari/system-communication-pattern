import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserClient } from '../../client/user-client/user.client';

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
    this.client.put(id, { ...updateUserInput, id: id } as any);
  }

  remove(id: number) {
    return this.client.delete(id);
  }
}
