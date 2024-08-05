import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  list() {
    return this.todoService.list();
  }

  @Post()
  create(@Body() body: CreateTodoDto) {
    return this.todoService.create(body.task);
  }

  @Delete('/:task')
  delete(@Param('task') task: string) {
    return this.todoService.delete(task);
  }
}
