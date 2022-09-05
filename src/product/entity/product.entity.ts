import { User } from 'src/user/entity/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar', { length: 30 })
  title!: string;

  @Column()
  price!: number;

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}
