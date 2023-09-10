import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER',
        transport: Transport.GRPC,
        options: {
          url: 'http://localhost:5000',
          package: 'user',
          protoPath: join(__dirname, '/proto/user.proto')
        }
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserGrpcModule {}
