// src/database/schemas/vehicle-condition-entry.schema.ts
import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

//-------------------------------------------
// Interface
export interface VehicleConditionEntry {
  vehicle_id?: string;
  author?: string;
  date?: Date;
  odometer?: string;
  inside_condition_ok?: boolean;
  outside_condition_ok?: boolean;
  condition_issues?: string[];
  remarks?: string;
  photoFileIds?: string[];
}

//-------------------------------------------
// Schema
const vehicleConditionEntrySchema = new Schema<VehicleConditionEntry>(
  {
    vehicle_id: String,
    author: String,
    date: { type: Date, default: Date.now },
    odometer: String,
    inside_condition_ok: Boolean,
    outside_condition_ok: Boolean,
    condition_issues: { type: [String], default: [] },
    remarks: String,
    photoFileIds: { type: [String], default: [] },
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// Plugins
vehicleConditionEntrySchema.plugin(mongoosePaginate);

//-------------------------------------------
// HydratedDocument type
export type VehicleConditionEntryDocument =
  HydratedDocument<VehicleConditionEntry>;

//-------------------------------------------
export default vehicleConditionEntrySchema;
