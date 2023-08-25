import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserService } from '../../common/user/service/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(<User>createUserInput);
  }

  @Query(() => [User], { name: 'findAll' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(id, <User>updateUserInput);
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }
}
