import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserClientModule } from '../../client/user-client/user-client.module';
import { UserMapper } from './mapper/user-mapper';
import { CommunModule } from '../../commun/commun.module';
import { UserService } from '../../commun/service/user.service';

@Module({
  imports: [UserClientModule, CommunModule],
  controllers: [UserController],
  providers: [UserService, UserMapper, Logger],
})
export class UserModule {}
