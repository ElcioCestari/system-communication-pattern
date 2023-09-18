import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse } from './dto/user.response';
import { UserService } from '../common/service/user.service';
import { BaseUser } from '../base/entity/base-user';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GrpcUserService {
  constructor(private readonly userService: UserService) {}

  create(createGrpcDto: CreateUserRequest): Promise<UserResponse> {
    return this.userService
      .create(<BaseUser>createGrpcDto)
      .catch(this.handleException());
  }

  findAll(): Promise<{ user: UserResponse[] }> {
    return this.userService
      .findAll()
      .then(this.handleFindAll())
      .catch(this.handleException());
  }

  findOne(id: number): Promise<UserResponse> {
    return this.userService
      .findOne(id?.toString())
      .catch(this.handleException());
  }

  update(id: number, updateGrpcDto: UpdateUserDto): Promise<UserResponse> {
    return this.userService
      .update(id?.toString(), <BaseUser>(<unknown>updateGrpcDto))
      .catch(this.handleException());
  }

  remove(id: number): Promise<void> {
    return this.userService
      .remove(id?.toString())
      .catch(this.handleException());
  }

  private handleException() {
    return (reason) => {
      throw reason.status === 404
        ? new RpcException({
            code: 5,
            message: 'user not found',
          })
        : reason;
    };
  }

  private handleFindAll() {
    return (data: BaseUser[]) => {
      return { user: data };
    };
  }
}
