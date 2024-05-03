import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import mongoose, { HydratedDocument } from 'mongoose';
import { user } from 'src/users/schemas/user.schema';

export type commentDocument = HydratedDocument<comment>;

@Schema({timestamps:true})
export class comment {
  @Prop()
  text: string;

  @Prop()
  likes:string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref :'user'})
  user :user ;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref :'comment'})
  parent :comment | null ;  
}

export const commentSchema = SchemaFactory.createForClass(comment);