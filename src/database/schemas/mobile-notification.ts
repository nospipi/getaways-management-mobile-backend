import { Schema, HydratedDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const mobileNotificationTypeEnum = [
  'announcement',
  'new_schedule',
  'updated_schedule',
  'new_task',
  'updated_task',
  'deleted_task',
] as const;

export type MobileNotificationType =
  (typeof mobileNotificationTypeEnum)[number];

export const MobileNotificationSchema = new Schema(
  {
    notificationType: {
      type: String,
      enum: mobileNotificationTypeEnum,
      required: true,
    },
    title: { type: String, required: false },
    body: { type: String, required: false },
    userId: { type: String, required: true },
    tourGroupId: { type: String, required: false },
    targetDate: { type: String, required: false },
    isRead: { type: Boolean, default: false },
    critical: { type: Boolean, required: false },
    pinned: { type: Boolean, required: false },
    authorId: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: false,
  }
);

MobileNotificationSchema.plugin(mongoosePaginate);

// Export document type
export type MobileNotification = {
  notificationType: MobileNotificationType;
  title?: string;
  body?: string;
  userId: string;
  tourGroupId?: string;
  targetDate?: string;
  isRead: boolean;
  critical?: boolean;
  pinned?: boolean;
  authorId?: string;
  createdAt: Date;
};

export type MobileNotificationDocument = HydratedDocument<MobileNotification>;
