import { Inject } from '@nestjs/common';
import { TodoStatus } from './dto/create-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntitiy } from 'src/entities/Todo.entiti';
import { Repository } from 'typeorm';


export class TodoService {

  constructor(
    @InjectRepository(TodoEntitiy)
    private todoRepo: Repository<TodoEntitiy>
  ) { }


  list() {
    return this.todoRepo.find({});
  }

  async create(task: string) {
    let todo = {
      task,
      status: TodoStatus.PENDING,
    };

    let result = await this.todoRepo.save(todo)


    return result;
  }

  // delete(task: string) {
  //   todos = todos.filter((todo) => todo.task !== task);

  //   return {
  //     message: 'Todo deleted successfully',
  //   };
  // }
}
