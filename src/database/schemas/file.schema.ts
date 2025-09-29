// src/database/schemas/file.schema.ts
import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

//-------------------------------------------
// Interface
export interface File {
  name?: string; // Original file name
  description?: string; // File description
  type?: string; // MIME type
  size?: number; // File size in bytes
  data?: string; // Base64-encoded binary data
}

//-------------------------------------------
// Schema
const fileSchema = new Schema<File>(
  {
    name: String,
    description: String,
    type: String,
    size: Number,
    data: String,
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// Plugins
fileSchema.plugin(mongoosePaginate);
fileSchema.plugin(mongooseAggregatePaginate);

//-------------------------------------------
// HydratedDocument type
export type FileDocument = HydratedDocument<File>;

//-------------------------------------------
export default fileSchema;
