import { Logger, Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserClientModule } from '../../client/user-client/user-client.module';
import { CommunModule } from '../../commun/commun.module';
import { UserService } from '../../commun/user/service/user.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    UserClientModule,
    CommunModule,
  ],
  providers: [UserResolver, UserService, Logger],
})
export class UserGraphqlModule {}
