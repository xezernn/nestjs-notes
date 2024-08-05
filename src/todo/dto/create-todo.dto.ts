import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsString, MinLength } from 'class-validator';

export enum TodoStatus {
  PENDING = 'pending',
  FINISHED = 'finished',
}

export class CreateTodoDto {
  @Type()
  @ApiProperty()
  @IsString()
  @MinLength(5)
  task: string;

  @Type()
  @ApiProperty({ enum: TodoStatus })
  @IsEnum(TodoStatus)
  status: TodoStatus;
}
