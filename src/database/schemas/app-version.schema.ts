// src/database/schemas/app-version.schema.ts
import { Schema, HydratedDocument } from 'mongoose';

//-------------------------------------------
// Interface
export interface AppVersion {
  version: string;
  date?: Date;
  release_notes: string;
  shouldBeForcedUpdate: boolean;
  ios?: boolean;
  android?: boolean;
}

//-------------------------------------------
// Schema
const appVersionSchema = new Schema<AppVersion>(
  {
    version: { type: String, required: true },
    date: { type: Date, default: Date.now },
    release_notes: { type: String, required: true },
    shouldBeForcedUpdate: { type: Boolean, required: true },
    ios: { type: Boolean, default: false },
    android: { type: Boolean, default: false },
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// HydratedDocument type
export type AppVersionDocument = HydratedDocument<AppVersion>;

//-------------------------------------------
export default appVersionSchema;
