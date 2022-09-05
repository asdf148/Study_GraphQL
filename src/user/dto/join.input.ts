import { Field, InputType } from '@nestjs/graphql';
import { Int } from 'type-graphql';

@InputType()
export class InputJoin {
  @Field()
  readonly firstName!: string;

  @Field()
  readonly lastName!: string;

  @Field(() => Int, { nullable: true })
  readonly age: number | null;
}
