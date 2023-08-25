import { Logger, Module } from '@nestjs/common';
import { UserService } from './service/user/user.service';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [ClientModule],
  providers: [UserService, Logger],
  exports: [UserService],
})
export class CommonModule {}
