import { TodoStatus } from './dto/create-todo.dto';

let todos: any = [];

export class TodoService {
  list() {
    return todos;
  }

  create(task: string) {
    let todo = {
      task,
      status: TodoStatus.PENDING,
    };

    todos.push(todo);

    return todo;
  }

  delete(task: string) {
    todos = todos.filter((todo) => todo.task !== task);

    return {
      message: 'Todo deleted successfully',
    };
  }
}
