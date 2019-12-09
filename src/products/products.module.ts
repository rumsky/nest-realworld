import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.cotroller';
import { ProductsServive } from './products.service';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsServive],
})
export class ProductsModule {}
