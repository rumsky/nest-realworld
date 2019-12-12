import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Query,
  Redirect,
  HttpCode,
  Header,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsServive } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { ConfigService } from 'src/config/config.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsServive) {}

  @Post()
  // @UsePipes(new ValidationPipe({ transform: true, disableErrorMessages: true }))
  addProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.insertProduct(
      createProductDto.title,
      createProductDto.description,
      createProductDto.price,
    );
  }

  @Get()
  getAll(): Promise<Product[]> {
    const list = this.productService.getAll();
    // tslint:disable-next-line: no-console
    // console.log(list);
    return list;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version === '5') {
      return { url: 'https://docs.nestjs.com/v5' };
    }
  }

  @Get('env')
  getEnv() {
    // for rest global config module
    return this.productService.getEnv();
  }

  @Get(':id')
  @HttpCode(200)
  @Header('Authorization', 'Bear COELEMCOEYWLDLJEOUGVJFEJOOIJE')
  getProduct(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  // @Patch(':id')
  // updateProduct(
  //   @Param('id') id: string,
  //   @Body('title') prodTitle: string,
  //   @Body('description') desc: string,
  //   @Body('price') price: number,
  // ) {
  //   return this.productService.updateById();
  // }
}
