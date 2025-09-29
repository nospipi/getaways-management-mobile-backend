// src/database/schemas/tour-group.schema.ts
import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

//-------------------------------------------
// Interfaces
export interface ScheduleNote {
  author_id: string;
  body: string;
  date?: Date;
}

export interface ExternalAssignment {
  role_id: string;
  user_id: string;
}

export interface ExternalAssignmentNote {
  user_id: string;
  body: string;
  date?: Date;
}

export interface TourGroup {
  product_id?: string;
  product?: string;
  option_id?: string;
  start_time_id?: string;
  date?: string;
  time?: string;
  bookings?: string[]; // ObjectId references
  task_id?: string;
  notes?: string;
  notes_list?: string[];
  schedule_notes_list?: ScheduleNote[];
  visible_in_planner?: boolean;
  external_assignments?: ExternalAssignment[];
  external_assignments_notes?: ExternalAssignmentNote[];
  omitted_roles?: string[];
  guide_id?: string;
  guide_uds_id?: string;
  guide_confirmation?: string;
  guide_details?: string;
  guides_asked?: any[];
  guide_email_sent?: boolean;
  vehicle_id?: string;
  is_projected_vehicle?: boolean;
  index?: number;
  vehicle_platform_entry?: string;
}

//-------------------------------------------
// Mongoose schema
const tourGroupSchema = new Schema<TourGroup>(
  {
    product_id: String,
    product: String,
    option_id: String,
    start_time_id: String,
    date: String,
    time: String,
    bookings: [{ type: Schema.Types.ObjectId, ref: 'booking' }],
    task_id: String,
    notes: String,
    notes_list: { type: [String], default: [] },
    schedule_notes_list: {
      type: [
        {
          author_id: String,
          body: String,
          date: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
    visible_in_planner: { type: Boolean, default: true },
    external_assignments: {
      type: [
        {
          role_id: String,
          user_id: String,
        },
      ],
      default: [],
    },
    external_assignments_notes: {
      type: [
        {
          user_id: String,
          body: String,
          date: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
    omitted_roles: { type: [String], default: [] },
    guide_id: String,
    guide_uds_id: String,
    guide_confirmation: String,
    guide_details: String,
    guides_asked: { type: Array, default: [] },
    guide_email_sent: Boolean,
    vehicle_id: String,
    is_projected_vehicle: { type: Boolean, default: true },
    index: { type: Number, default: 1 },
    vehicle_platform_entry: String,
  },
  {
    timestamps: true,
    minimize: false,
  }
);

//-------------------------------------------
// Plugins
tourGroupSchema.plugin(mongoosePaginate);
tourGroupSchema.plugin(mongooseAggregatePaginate);

//-------------------------------------------
// HydratedDocument type
export type TourGroupDocument = HydratedDocument<TourGroup>;

//-------------------------------------------
export default tourGroupSchema;
