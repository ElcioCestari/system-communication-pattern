import { Module } from '@nestjs/common';
import { UserModule } from './rest/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { GraphqlModule } from './graphql/graphql.module';
import { CommonModule } from './common/common-module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphqlModule,
    UserModule,
    ClientModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
