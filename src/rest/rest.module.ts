import { Logger, Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { ClientModule } from '../client/client.module';
import { UserMapper } from './mapper/user-mapper';
import { UserService } from '../common/service/user.service';
import { CommonModule } from '../common/common-module';

@Module({
  imports: [ClientModule, CommonModule],
  controllers: [UserController],
  providers: [UserService, UserMapper, Logger],
})
export class RestModule {}
