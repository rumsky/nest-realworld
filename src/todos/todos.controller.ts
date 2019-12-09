import { Controller, Get, Render } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  @Render('list')
  root() {
    return { list: 'Item one' };
  }
}
