// src/database/schemas/task.schema.ts
import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

//-------------------------------------------

export interface TaskGuest {
  name: string;
  count: number;
  checked_in: boolean;
}

export interface Pickup {
  meeting_point?: string;
  time?: string;
  details?: string;
  lat?: string;
  lon?: string;
  guests: TaskGuest[];
}

export interface Task {
  product: string;
  option_id: string;
  start_time_id: string;
  date: string;
  assignees?: string[];
  vehicle_id?: string;
  pickups?: Pickup[];
  details?: string;
  tour_group_id?: string;
  author_id: string;
}

// Hydrated document type
export type TaskDocument = HydratedDocument<Task>;

//-------------------------------------------

// Subschemas
const taskGuestSchema = new Schema<TaskGuest>({
  name: { type: String, default: '' },
  count: { type: Number, default: 1 },
  checked_in: { type: Boolean, default: false },
});

const pickupSchema = new Schema<Pickup>({
  meeting_point: String,
  time: String,
  details: String,
  lat: String,
  lon: String,
  guests: [taskGuestSchema],
});

// Main schema
const TaskSchema = new Schema<Task>(
  {
    product: { type: String, required: true },
    option_id: { type: String, required: true },
    start_time_id: { type: String, required: true },
    date: { type: String, required: true },
    assignees: [String],
    vehicle_id: String,
    pickups: [pickupSchema],
    details: String,
    tour_group_id: String,
    author_id: { type: String, required: true },
  },
  { minimize: false }
);

//-------------------------------------------

// Plugins
TaskSchema.plugin(mongoosePaginate);
TaskSchema.plugin(mongooseAggregatePaginate);
