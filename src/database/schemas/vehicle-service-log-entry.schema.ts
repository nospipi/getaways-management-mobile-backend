// src/database/schemas/vehicle-service-log-entry.schema.ts
import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

//-------------------------------------------
// Interfaces
export interface VehicleServiceLogEntry {
  vehicle_id?: string;
  assignee?: string;
  author?: string;
  workshop?: string;
  date?: string;
  odometer?: string;
  cost?: string;
  repairs?: string[];
  notes?: string;
}

//-------------------------------------------
// Mongoose schema
const vehicleServiceLogEntrySchema = new Schema<VehicleServiceLogEntry>(
  {
    vehicle_id: String,
    assignee: String,
    author: String,
    workshop: String,
    date: String,
    odometer: String,
    cost: String,
    repairs: { type: [String], default: [] },
    notes: String,
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// Plugins
vehicleServiceLogEntrySchema.plugin(mongoosePaginate);

//-------------------------------------------
// HydratedDocument type
export type VehicleServiceLogEntryDocument =
  HydratedDocument<VehicleServiceLogEntry>;

//-------------------------------------------
export default vehicleServiceLogEntrySchema;
