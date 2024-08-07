import { TodoStatus } from "src/todo/dto/create-todo.dto";
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class TodoEntitiy {
    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    task: string

    @Column()
    status: TodoStatus
}