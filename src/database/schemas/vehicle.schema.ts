// src/database/schemas/vehicle.schema.ts
import { Schema, HydratedDocument } from 'mongoose';

//-------------------------------------------
// Interfaces
export interface VehiclePosition {
  latitude?: number;
  longitude?: number;
  speed?: number;
  heading?: number;
  updated_at?: Date;
}

export interface UpcomingScheduledService {
  date?: string;
  time?: string;
  workshop?: string;
  planned_repairs?: string[];
}

export interface Vehicle {
  plate: string;
  type: string;
  max_capacity?: number;
  color: string;
  gps_tracker_uid?: string;
  engine_on?: boolean;
  position?: VehiclePosition;
  upcoming_scheduled_service?: UpcomingScheduledService[];
  platform_entry_required: boolean;
}

//-------------------------------------------
// Mongoose schema
const vehicleSchema = new Schema<Vehicle>(
  {
    plate: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    type: { type: String, required: true },
    max_capacity: Number,
    color: { type: String, required: true },
    gps_tracker_uid: String,
    engine_on: Boolean,
    position: {
      latitude: Number,
      longitude: Number,
      speed: Number,
      heading: Number,
      updated_at: Date,
    },
    upcoming_scheduled_service: {
      type: [
        {
          date: String,
          time: String,
          workshop: String,
          planned_repairs: [String],
        },
      ],
      default: [],
    },
    platform_entry_required: { type: Boolean, required: true },
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// HydratedDocument type
export type VehicleDocument = HydratedDocument<Vehicle>;

//-------------------------------------------
export default vehicleSchema;
