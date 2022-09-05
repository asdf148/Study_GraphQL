import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/user/entity/user';
import { Int } from 'type-graphql';

@ObjectType()
export class ProductDto {
  @Field()
  readonly id?: number;

  @Field()
  readonly title!: string;

  @Field(() => Int)
  readonly price!: number;

  @Field(() => UserEntity)
  readonly user!: UserEntity;
}
