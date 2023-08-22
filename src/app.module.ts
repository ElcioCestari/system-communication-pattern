import { Module } from '@nestjs/common';
import { UserModule } from './rest/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { UserClientModule } from './client/user-client/user-client.module';
import { UserGraphqlModule } from './graphql/user/user-graphql.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserGraphqlModule,
    UserModule,
    UserClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
