import { Logger, Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserClientModule } from '../../client/user-client.module';
import { CommonModule } from '../../common/commonModule';
import { UserService } from '../../common/user/service/user.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    UserClientModule,
    CommonModule,
  ],
  providers: [UserResolver, UserService, Logger],
})
export class UserGraphqlModule {}
