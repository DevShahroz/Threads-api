import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<user>;

@Schema()
export class user {
  @Prop()
  name: string;

}

export const userSchema = SchemaFactory.createForClass(user);