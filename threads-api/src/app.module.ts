import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CommentsModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin123@mycluster.zj5fzkw.mongodb.net/?retryWrites=true&w=majority&appName=mycluster'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
