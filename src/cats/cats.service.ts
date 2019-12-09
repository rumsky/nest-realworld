import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from './cats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {}

  private readonly cats: Cat[] = [];

  async create(cat: Cat): Promise<Cat> {
    const createCat = await this.catRepository.save(cat);
    console.log(createCat);
    return createCat;
  }

  async findAll(): Promise<CatEntity[]> {
    return await this.catRepository.find();
  }

  async findById(id: number): Promise<CatEntity> {
    return await this.catRepository.findOne(id);
  }

  async update(id: number, cat: Cat): Promise<Cat> {
    const toUpdate = await this.catRepository.findOne(id);
    const updated = Object.assign(toUpdate, cat);
    return await this.catRepository.save(updated);
  }

  async delete(id: number) {
    return await this.catRepository.delete(id);
  }
}
