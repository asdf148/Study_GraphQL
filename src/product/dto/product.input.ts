import { Field, InputType } from '@nestjs/graphql';
import { UserInputEntity } from 'src/user/entity/user.input';
import { Int } from 'type-graphql';

@InputType()
export class InputProduct {
  @Field()
  readonly title!: string;

  @Field(() => Int)
  readonly price!: number;

  @Field(() => UserInputEntity)
  readonly user: UserInputEntity;
}
