import { Controller } from '@nestjs/common';
import {GrpcMethod, MessagePattern, Payload} from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/create-user.request';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly grpcService: UserService) {}

  @GrpcMethod('UserService', 'Create')
  @MessagePattern('Create')
  create(@Payload() createGrpcDto: CreateUserRequest) {
    return this.grpcService.create(createGrpcDto);
  }

  @MessagePattern('findAllGrpc')
  findAll() {
    return this.grpcService.findAll();
  }

  @MessagePattern('findOneGrpc')
  findOne(@Payload() id: number) {
    return this.grpcService.findOne(id);
  }

  @MessagePattern('updateGrpc')
  update(@Payload() updateGrpcDto: UpdateUserDto) {
    return this.grpcService.update(updateGrpcDto.id, updateGrpcDto);
  }

  @MessagePattern('removeGrpc')
  remove(@Payload() id: number) {
    return this.grpcService.remove(id);
  }
}
