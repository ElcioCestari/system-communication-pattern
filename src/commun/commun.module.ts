import { Logger, Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserClientModule } from '../client/user-client/user-client.module';

@Module({
  imports: [UserClientModule],
  providers: [UserService, Logger],
  exports: [UserService],
})
export class CommunModule {}
