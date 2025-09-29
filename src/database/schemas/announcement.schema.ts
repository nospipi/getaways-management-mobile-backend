// src/database/schemas/announcement.schema.ts
import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

//-------------------------------------------
// Interface
export interface Announcement {
  title: string;
  body: string;
  date?: Date;
  critical: boolean;
  pinned?: boolean;
  author: string;
}

//-------------------------------------------
// Schema
const announcementSchema = new Schema<Announcement>(
  {
    title: { type: String, required: true },
    body: {
      type: String,
      required: [true, 'You cannot publish an empty announcement'],
      minlength: [10, 'Announcements must have more than 10 characters'],
    },
    date: { type: Date, default: Date.now },
    critical: { type: Boolean, required: true },
    pinned: { type: Boolean, default: false },
    author: { type: String, required: true },
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// Plugins
announcementSchema.plugin(mongoosePaginate);

//-------------------------------------------
// HydratedDocument type
export type AnnouncementDocument = HydratedDocument<Announcement>;

//-------------------------------------------
export default announcementSchema;
