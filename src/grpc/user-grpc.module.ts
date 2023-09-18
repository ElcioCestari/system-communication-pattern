import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { GrpcUserService } from './grpc-user.service';
import { CommonModule } from '../common/common-module';

@Module({
  imports: [CommonModule],
  controllers: [UserController],
  providers: [GrpcUserService],
})
export class UserGrpcModule {}
