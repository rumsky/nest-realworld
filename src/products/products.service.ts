import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsServive {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  private products: Product[] = [];

  async insertProduct(
    title: string,
    description: string,
    price: number,
  ): Promise<Product> {
    const createProduct = new this.productModel({ title, description, price });
    return await createProduct.save();
    // const prodId = Date.now().toString();
    // const newProduct = new Product(prodId, title, desc, price);
    // this.products.push(newProduct);
    // return prodId;
  }

  async getAll() {
    return await this.productModel.find();
  }

  async getProductById(productId: string): Promise<Product> {
    const product = await this.productModel.findOne({ _id: productId });
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }

  updateById(productId: string, title: string, desc: string, price: number) {
    const product = this.findProduct(productId);
  }

  private findProduct(productId: string) {
    const product = this.products.find(prod => prod.id === productId);
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
