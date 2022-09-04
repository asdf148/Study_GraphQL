import { Field, InputType } from '@nestjs/graphql';
import { Int } from 'type-graphql';

@InputType()
export class InputProduct {
  @Field()
  readonly title!: string;

  @Field(() => Int)
  readonly price!: number;
}
