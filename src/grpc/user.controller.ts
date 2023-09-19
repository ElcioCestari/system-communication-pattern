import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { GrpcUserService } from './grpc-user.service';
import { CreateUserRequest } from './dto/create-user.request';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse } from './dto/user.response';

@Controller()
export class UserController {
  constructor(private readonly grpcService: GrpcUserService) {}

  @GrpcMethod('UserService', 'Create')
  @MessagePattern('Create')
  create(@Payload() createGrpcDto: CreateUserRequest): Promise<UserResponse> {
    return this.grpcService.create(createGrpcDto);
  }

  @GrpcMethod('UserService', 'FindAll')
  findAll() {
    return this.grpcService.findAll();
  }

  @GrpcMethod('UserService')
  findOne(@Payload() userId: { id: number }) {
    return this.grpcService.findOne(userId.id);
  }

  @GrpcMethod('UserService')
  update(@Payload() updateGrpcDto: UpdateUserDto) {
    return this.grpcService.update(updateGrpcDto.id, updateGrpcDto);
  }

  @GrpcMethod('UserService')
  remove(@Payload() id: number) {
    return this.grpcService.remove(id);
  }
}
