import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntitiy } from './entities/Todo.entiti';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: "mongodb+srv://xezernovruz79:Xezer1234@cluster0.rop2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      useNewUrlParser: true,
      synchronize: true,
      logging: ["query", "error", "log"],
      // logger: "simple-console",
      entities: [TodoEntitiy]
      // port: 3306,
      // username: 'root',
      // password: 'root',
      // database: 'test',
      // entities: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
