import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserClient } from '../../client/user-client/user.client';
import { UserMapper } from './mapper/user-mapper';
import { User } from '../../client/entity/user';

@Injectable()
export class UserService {
  constructor(
    private readonly userClient: UserClient,
    private readonly mapper: UserMapper,
    private readonly logger: Logger,
  ) {}

  async create(entity: User) {
    try {
      return await this.userClient.post(entity);
    } catch (err) {
      this.logger.error(`Error to save ${err}`);
      throw err;
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userClient.get();
    } catch (err) {
      this.logger.error(`Error to find all users: ${err}`);
      throw err;
    }
  }

  async findOne(id: string) {
    try {
      const user: User = await this.userClient.getById(id);
      if (!user) {
        throw new NotFoundException(`User with id ${id} was not found`);
      }
      return user;
    } catch (e) {
      this.logger.error(`Error to findOne ${e}`);
      throw e;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
