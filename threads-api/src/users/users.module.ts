import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { user, userSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[MongooseModule.forFeature([{ name: user.name, schema: userSchema }])]
})
export class UsersModule {}
