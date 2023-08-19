import { Logger, Module } from '@nestjs/common';
import { UserClient } from './user.client';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [UserClient, ConfigService, Logger],
  exports: [UserClient],
})
export class UserClientModule {}
