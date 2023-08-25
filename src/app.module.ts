import { Module } from '@nestjs/common';
import { UserModule } from './rest/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { UserGraphqlModule } from './graphql/user/user-graphql.module';
import { CommonModule } from './common/common-module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserGraphqlModule,
    UserModule,
    ClientModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
