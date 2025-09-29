// src/database/schemas/group.schema.ts
import { Schema, HydratedDocument } from 'mongoose';

//-------------------------------------------
// Interface
export interface Group {
  title: string;
}

//-------------------------------------------
// Schema
const groupSchema = new Schema<Group>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// HydratedDocument type
export type GroupDocument = HydratedDocument<Group>;

//-------------------------------------------
export default groupSchema;
