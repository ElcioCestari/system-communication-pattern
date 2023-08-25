import { Logger, Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ClientModule } from '../../client/client.module';
import { UserService } from '../../common/user/service/user.service';
import { CommonModule } from '../../common/common-module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    ClientModule,
    CommonModule,
  ],
  providers: [UserResolver, UserService, Logger],
})
export class UserGraphqlModule {}
