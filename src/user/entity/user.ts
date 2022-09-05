import { Field, ObjectType } from '@nestjs/graphql';
import { Int } from 'type-graphql';

@ObjectType()
export class UserEntity {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int, { nullable: true })
  age: number | null;
}
