// src/database/schemas/user-day-schedule.schema.ts
import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

//-------------------------------------------
// Interfaces
export interface TourGroup {
  role: string;
  id: string;
  details?: string;
  projected?: boolean;
}

export interface RequestInfo {
  requestBody: string;
  author_id: string;
  date?: Date;
}

export interface CommentInfo {
  text: string;
  date: string;
  user: string;
  author_id: string;
}

export interface UserDaySchedule {
  date?: string; // YYYY-MM-DD
  user: string;
  tourGroups?: TourGroup[];
  isProjectedDayOff?: boolean;
  isDayOff?: boolean;
  isProjectedLeave?: boolean;
  isLeave?: boolean;
  isSeen?: boolean;
  userHasReceivedInitialNotification?: boolean;
  request?: RequestInfo;
  comments?: CommentInfo[];
}

//-------------------------------------------
// Mongoose schema
const userDayScheduleSchema = new Schema<UserDaySchedule>(
  {
    date: { type: String },
    user: { type: String, required: true },
    tourGroups: {
      type: [
        {
          role: String,
          id: String,
          details: String,
          projected: { type: Boolean, default: true },
        },
      ],
      default: [],
    },
    isProjectedDayOff: { type: Boolean, default: false },
    isDayOff: { type: Boolean, default: false },
    isProjectedLeave: { type: Boolean, default: false },
    isLeave: { type: Boolean, default: false },
    isSeen: { type: Boolean, default: false },
    userHasReceivedInitialNotification: { type: Boolean, default: false },
    request: {
      type: {
        requestBody: String,
        author_id: String,
        date: { type: Date, default: Date.now },
      },
    },
    comments: [
      {
        text: String,
        date: String,
        user: String,
        author_id: String,
      },
    ],
  },
  {
    timestamps: true,
    minimize: false,
  }
);

//-------------------------------------------
// Indexes
userDayScheduleSchema.index({ user: 1, date: 1 });

//-------------------------------------------
// Plugins
userDayScheduleSchema.plugin(mongoosePaginate);
userDayScheduleSchema.plugin(mongooseAggregatePaginate);

//-------------------------------------------
// HydratedDocument type
export type UserDayScheduleDocument = HydratedDocument<UserDaySchedule>;

//-------------------------------------------
export default userDayScheduleSchema;
