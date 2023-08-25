import { Logger, Module } from '@nestjs/common';
import { UserClient } from './user-client/user.client';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [UserClient, Logger],
  exports: [UserClient],
})
export class ClientModule {}
