import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { comment, commentSchema } from './schemas/comments.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports :[MongooseModule.forFeature([{ name: comment.name, schema: commentSchema }])]
})
export class CommentsModule {}
