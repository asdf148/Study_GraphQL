import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InputJoin } from 'src/user/dto/join.input';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDto])
  async getUsers() {
    return await this.userService.findUsers();
  }

  @Mutation(() => UserDto)
  async addUser(@Args('data') data: InputJoin) {
    return await this.userService.join(data);
  }
}
