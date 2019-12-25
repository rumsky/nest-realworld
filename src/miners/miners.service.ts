import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Miner } from './miners.model';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class MinerService {
  constructor(
    @InjectModel('Miner') private readonly minerModel: Model<Miner>,
  ) {}
  private miners: Miner[] = [];

  async insertMiner(ip: string, sn: string, hashrate: number): Promise<Miner> {
    const createMiner = new this.minerModel({ ip, sn, hashrate });
    return await createMiner.save();
  }

  async getAll() {
    return await this.minerModel.find();
  }

  async getProductById(productId: string): Promise<Miner> {
    const product = await this.minerModel.findOne({ _id: productId });
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
