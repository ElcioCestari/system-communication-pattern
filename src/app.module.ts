import { Module } from '@nestjs/common';
import { RestModule } from './rest/rest.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { GraphqlModule } from './graphql/graphql.module';
import { CommonModule } from './common/common-module';
import { UserGrpcModule } from './grpc/user-grpc.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphqlModule,
    RestModule,
    ClientModule,
    CommonModule,
    UserGrpcModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
