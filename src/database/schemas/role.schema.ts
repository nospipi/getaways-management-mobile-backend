// src/database/schemas/role.schema.ts
import { Schema, HydratedDocument } from 'mongoose';

//-------------------------------------------
// Interface
export interface Role {
  title: string;
  isExternalAssociate?: boolean;
  shouldReceiveSchedule?: boolean;
  isInvolvedInTours?: boolean;
}

//-------------------------------------------
// Schema
const roleSchema = new Schema<Role>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    isExternalAssociate: { type: Boolean, default: false },
    shouldReceiveSchedule: { type: Boolean, default: false },
    isInvolvedInTours: { type: Boolean, default: true },
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// HydratedDocument type
export type RoleDocument = HydratedDocument<Role>;

//-------------------------------------------
export default roleSchema;
