import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BugReportDocument = HydratedDocument<BugReport>;

@Schema()
export class BugReport {
  @Prop({
    required: [true, 'You cannot publish an empty bug report'],
  })
  body: string;

  @Prop()
  user: string;

  @Prop({ default: Date.now })
  date: Date;
}

export const BugReportSchema = SchemaFactory.createForClass(BugReport);
