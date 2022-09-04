import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/product/dto/product.dto';
import { Product } from 'src/product/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(data: ProductDto) {
    return await this.productRepository.create(data).save();
  }

  async getProducts() {
    return await this.productRepository.find();
  }
}
