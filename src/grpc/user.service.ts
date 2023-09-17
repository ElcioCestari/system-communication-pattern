import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserResponse} from "./dto/user.response";

@Injectable()
export class UserService {
  create(createGrpcDto: CreateUserRequest): UserResponse {
    return {name: 'elcio'};
  }

  findAll() {
    return `This action returns all grpc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grpc`;
  }

  update(id: number, updateGrpcDto: UpdateUserDto) {
    return `This action updates a #${id} grpc`;
  }

  remove(id: number) {
    return `This action removes a #${id} grpc`;
  }
}
