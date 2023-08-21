import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserClientModule } from '../../client/user-client/user-client.module';
import { UserMapper } from './mapper/user-mapper';

@Module({
  imports: [UserClientModule],
  controllers: [UserController],
  providers: [UserService, UserMapper, Logger],
})
export class UserModule {}
