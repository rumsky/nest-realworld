import { Module } from '@nestjs/common';
import { MinersResolver } from './miners.resolver';
import { MinerService } from './miners.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MinerSchema } from './schemas/miner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Miner', schema: MinerSchema }]),
  ],
  providers: [MinersResolver, MinerService],
})
export class MinersModule {}
