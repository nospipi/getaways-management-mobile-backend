// src/database/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ minimize: false })
export class User {
  @Prop({ required: true, unique: true, uniqueCaseInsensitive: true })
  name: string;

  @Prop({
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
    match: [/^\S*$/, 'Username cannot contain spaces'],
  })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  mobileLogStatus: boolean;

  @Prop({
    type: [
      {
        token: { type: String, required: true },
        expoPushToken: { type: String, required: false },
        device: String,
        deviceBrand: String,
        deviceModel: String,
        deviceOS: String,
        deviceOsVersion: String,
        deviceName: String,
        clerkSessionId: { type: String, required: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    default: [],
  })
  loggedDevices: any[];

  @Prop({ type: Array, required: true })
  groups: string[];

  @Prop({ type: Array, required: true })
  roles: string[];

  @Prop({ type: Object })
  contact: { tel?: string; email?: string };

  @Prop() id_number: string;
  @Prop() afm_number: string;
  @Prop() amka_number: string;
  @Prop() driver_license_number: string;
  @Prop() guide_reg_number: string;

  @Prop({
    type: Object,
    default: {
      notifications: {
        shown: {
          new_booking: true,
          booking_changed_date: true,
          booking_cancelled: true,
          client_confirmed: true,
          client_updated_location: true,
        },
      },
    },
  })
  web_app_user_preferences: any;

  @Prop() isAdmin: boolean;
  @Prop() isModerator: boolean;
  @Prop() onOfficeDuty: boolean;
  @Prop() isEmergencyContact: boolean;
  @Prop({ type: Object }) permissions: any;
  @Prop() shouldReceiveAnnouncements: boolean;

  @Prop() amountOfWorkDaysPerWeek: number;
  @Prop() canExceedAmountOfWorkDaysPerWeek: boolean;

  @Prop({
    type: [String],
    enum: [
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
      'SUNDAY',
    ],
  })
  preferredWorkDaysPerWeek: string[];

  @Prop({
    type: [String],
    enum: [
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
      'SUNDAY',
    ],
  })
  preferredDayOffDaysPerWeek: string[];

  @Prop() scheduleRemarks: string;
  @Prop() isFlexibleWithWorkDaysPerWeek: boolean;
  @Prop() canWorkMultipleShiftDays: boolean;
  @Prop() maxMultipleShiftDaysPerWeek: number;
  @Prop() canWorkFullDayShifts: boolean;
  @Prop() maxFullDayShiftsPerWeek: number;

  @Prop({ type: [String], default: ['00:00', '23:59'] })
  availableBetweenTimes: string[];

  @Prop() isFlexibleWithTimes: boolean;
  @Prop() isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
