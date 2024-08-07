import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntitiy } from 'src/entities/Todo.entiti';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntitiy])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule { }
