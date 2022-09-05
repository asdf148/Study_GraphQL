import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InputJoin } from 'src/user/dto/join.input';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findUsers(): Promise<User[]> {
    return await this.userRepository.find({ relations: { products: true } });
  }

  public async join(data: InputJoin): Promise<User> {
    return await this.userRepository.create(data).save();
  }
}
