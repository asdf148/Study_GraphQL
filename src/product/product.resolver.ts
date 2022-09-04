import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductDto } from 'src/product/dto/product.dto';
import { InputProduct } from 'src/product/dto/product.input';
import { ProductService } from 'src/product/product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductDto])
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Mutation(() => ProductDto)
  async createProduct(@Args('data') data: InputProduct) {
    return await this.productService.createProduct(data);
  }
}
