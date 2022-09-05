import { Field, ObjectType } from '@nestjs/graphql';
import { Int } from 'type-graphql';

@ObjectType()
export class ProductEntity {
  @Field(() => Int)
  id!: number;

  @Field()
  title!: string;

  @Field(() => Int)
  price!: number;
}
