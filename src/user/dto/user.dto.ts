import { Field, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/product/entity/product';
import { Int } from 'type-graphql';

@ObjectType()
export class UserDto {
  @Field()
  readonly id?: number;

  @Field()
  readonly firstName?: string;

  @Field()
  readonly lastName?: string;

  @Field(() => Int, { nullable: true })
  readonly age: number | null;

  @Field(() => [ProductEntity])
  readonly products!: ProductEntity[];
}
