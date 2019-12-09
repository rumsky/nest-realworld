import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
