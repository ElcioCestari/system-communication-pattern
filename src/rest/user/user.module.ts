import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserClientModule } from '../../client/user-client.module';
import { UserMapper } from './mapper/user-mapper';
import { CommonModule } from '../../common/commonModule';
import { UserService } from '../../common/user/service/user.service';

@Module({
  imports: [UserClientModule, CommonModule],
  controllers: [UserController],
  providers: [UserService, UserMapper, Logger],
})
export class UserModule {}
