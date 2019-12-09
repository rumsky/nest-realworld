import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findById(@Param() params): Promise<Cat> {
    return this.catsService.findById(params.id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param() params, @Body() cat: CreateCatDto) {
    console.log(params);
    return this.catsService.update(params.id, cat);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.catsService.delete(params.id);
  }
}
