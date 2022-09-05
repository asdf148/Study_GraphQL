import { Field, InputType } from '@nestjs/graphql';
import { Int } from 'type-graphql';

@InputType()
export class UserInputEntity {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int, { nullable: true })
  age: number | null;
}
