import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UserClient } from '../../client/user-client/user.client';
import { BaseUser } from '../../base/entity/base-user';

// import { UserMapper } from './mapper/service-mapper';

@Injectable()
export class UserService {
  constructor(
    private readonly userClient: UserClient,
    private readonly logger: Logger,
  ) {}

  async create(entity: BaseUser) {
    try {
      return await this.userClient.post(entity);
    } catch (err) {
      this.logger.error(`Error to save ${err}`);
      throw err;
    }
  }

  async findAll(): Promise<BaseUser[]> {
    try {
      return await this.userClient.get();
    } catch (err) {
      this.logger.error(`Error to find all users: ${err}`);
      throw err;
    }
  }

  async findOne(id: string) {
    try {
      const user: BaseUser = await this.userClient.getById(id);
      if (!user) {
        throw new NotFoundException(`User with id ${id} was not found`);
      }
      return user;
    } catch (e) {
      this.logger.error(`Error to findOne ${e}`);
      throw e;
    }
  }

  async update(id: string, user: BaseUser) {
    try {
      const foundUser: BaseUser = await this.userClient.getById(id);
      if (!foundUser) {
        throw new NotFoundException(`User with id ${id} was not found`);
      }
      user.id = id;
      return await this.userClient.put(id, user);
    } catch (e) {
      this.logger.error(`Error to update ${e}`);
      throw e;
    }
  }

  async remove(id: string) {
    try {
      const user: BaseUser = await this.userClient.getById(id);
      if (!user) {
        throw new NotFoundException(`User with id ${id} was not found`);
      }
      return this.userClient.delete(id);
    } catch (e) {
      this.logger.error(`Error to delete ${e}`);
      throw e;
    }
  }
}
