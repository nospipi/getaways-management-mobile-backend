// interfaces/schemaInterfaces.ts

// Announcement Schema Interface
export interface Announcement {
  title: string;
  body: string;
  date: Date;
  critical: boolean;
  pinned: boolean;
  author: string;
}

// App Version Schema Interface
export interface AppVersion {
  version: string;
  date: Date;
  release_notes: string;
  shouldBeForcedUpdate: boolean;
  ios?: boolean;
  android?: boolean;
}

// File Schema Interface
export interface File {
  name?: string;
  description?: string;
  type?: string;
  size?: number;
  data?: string;
}

// Group Schema Interface
export interface Group {
  title: string;
}

// Mobile Notification Schema Interface
export type MobileNotificationType =
  | 'announcement'
  | 'new_schedule'
  | 'updated_schedule'
  | 'new_task'
  | 'updated_task'
  | 'deleted_task';

export interface MobileNotification {
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
}

// Products Schema Interface
export interface ProductOption {
  title?: string;
  bokun_code?: string;
  is_private?: boolean;
  is_guided?: boolean;
  pickup_included?: boolean;
  requires_vehicle?: boolean;
  requires_platform_entry?: boolean;
  requires_traveller_details_form?: boolean;
  guide_assignment_identifier?: string;
  description?: string;
  meeting_point_id?: string;
  crewRoles?: string[];
}

export interface ProductStartTime {
  time_slot?: string;
  isDefaultPickupTime?: boolean;
  label?: string;
  bokun_start_time_id?: string;
}

export interface ProductLocation {
  address?: string;
  latitude?: number;
  longitude?: number;
}

export interface ProductPicture {
  file_id?: string;
  caption?: string;
  alt?: string;
  description?: string;
}

export interface ProductItinerary {
  title?: string;
  description?: string;
  duration_text?: string;
  duration_value_in_minutes?: number;
}

export interface Product {
  index?: number;
  title?: string;
  options?: ProductOption[];
  start_times?: ProductStartTime[];
  platform_product_name?: string;
  bokun_product_code?: string;
  location?: ProductLocation;
  meeting_point_id?: string;
  slug?: string;
  product_pictures?: ProductPicture[];
  guide_assignment_identifier?: string;
  activity_level?: string;
  additional_info?: string[];
  special_instructions?: string[];
  itinerary?: ProductItinerary[];
  highlights?: string[];
  product_short_description?: string;
  product_full_description?: string;
  inclusions?: string[];
  exclusions?: string[];
  pricing_options?: string[];
  destinations?: string[];
  tour_types?: string[];
  tour_duration?: string;
  tour_duration_type?: string;
  tour_categories?: string[];
  crewGroups?: string[];
  crewRoles?: string[];
  review_link?: string;
  affiliate_link?: string;
  isPublished?: boolean;
  market_price?: number;
  isAvailableInPlan?: boolean;
  suggested_products?: string[];
  isCompleted?: boolean;
  disclaimers?: string[];
}

// Role Schema Interface
export interface Role {
  title: string;
  isExternalAssociate: boolean;
  shouldReceiveSchedule: boolean;
  isInvolvedInTours: boolean;
}

// Task Schema Interface
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
  guests?: TaskGuest[];
}

export interface Task {
  product: string;
  option_id: string;
  start_time_id: string;
  date: string;
  assignees?: any[];
  vehicle_id?: string;
  pickups?: Pickup[];
  details?: string;
  tour_group_id?: string;
  author_id: string;
}

// Tour Group Schema Interface
export interface ScheduleNote {
  author_id?: string;
  body?: string;
  date: Date;
}

export interface ExternalAssignment {
  role_id?: string;
  user_id?: string;
}

export interface ExternalAssignmentNote {
  user_id?: string;
  body?: string;
  date: Date;
}

export interface TourGroup {
  product_id?: string;
  product?: string;
  option_id?: string;
  start_time_id?: string;
  date?: string;
  time?: string;
  bookings?: string[];
  task_id?: string;
  notes?: string;
  notes_list?: string[];
  schedule_notes_list?: ScheduleNote[];
  visible_in_planner: boolean;
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
  is_projected_vehicle: boolean;
  index: number;
  vehicle_platform_entry?: string;
}

// User Day Schedule Schema Interface
export type DayOfWeek =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export interface UserDayScheduleTourGroup {
  role?: string;
  id?: string;
  details?: string;
  projected: boolean;
}

export interface UserDayScheduleRequest {
  requestBody?: string;
  author_id?: string;
  date: Date;
}

export interface UserDayScheduleComment {
  text?: string;
  date?: string;
  user?: string;
  author_id?: string;
}

export interface UserDaySchedule {
  date?: string;
  user: string;
  tourGroups?: UserDayScheduleTourGroup[];
  isProjectedDayOff: boolean;
  isDayOff: boolean;
  isProjectedLeave: boolean;
  isLeave: boolean;
  isSeen: boolean;
  userHasReceivedInitialNotification: boolean;
  request?: UserDayScheduleRequest;
  comments?: UserDayScheduleComment[];
  createdAt?: Date;
  updatedAt?: Date;
}

// User Schema Interface
export interface LoggedDevice {
  token: string;
  expoPushToken?: string;
  device?: string;
  deviceBrand?: string;
  deviceModel?: string;
  deviceOS?: string;
  deviceOsVersion?: string;
  deviceName?: string;
  clerkSessionId?: string;
  createdAt: Date;
}

export interface UserContact {
  tel?: string;
  email?: string;
}

export interface UserWebAppNotifications {
  shown?: {
    new_booking?: boolean;
    booking_changed_date?: boolean;
    booking_cancelled?: boolean;
    client_confirmed?: boolean;
    client_updated_location?: boolean;
  };
}

export interface UserWebAppPreferences {
  notifications?: UserWebAppNotifications;
}

export interface User {
  name: string;
  username: string;
  password: string;
  mobileLogStatus: boolean;
  loggedDevices?: LoggedDevice[];
  groups: any[];
  roles: any[];
  contact?: UserContact;
  id_number?: string;
  afm_number?: string;
  amka_number?: string;
  driver_license_number?: string;
  guide_reg_number?: string;
  web_app_user_preferences?: UserWebAppPreferences;
  isAdmin?: boolean;
  isModerator?: boolean;
  onOfficeDuty?: boolean;
  isEmergencyContact?: boolean;
  permissions?: any;
  shouldReceiveAnnouncements?: boolean;
  amountOfWorkDaysPerWeek?: number;
  canExceedAmountOfWorkDaysPerWeek?: boolean;
  preferredWorkDaysPerWeek?: DayOfWeek[];
  preferredDayOffDaysPerWeek?: DayOfWeek[];
  scheduleRemarks?: string;
  isFlexibleWithWorkDaysPerWeek?: boolean;
  canWorkMultipleShiftDays?: boolean;
  maxMultipleShiftDaysPerWeek?: number;
  canWorkFullDayShifts?: boolean;
  maxFullDayShiftsPerWeek?: number;
  availableBetweenTimes?: string[];
  isFlexibleWithTimes?: boolean;
  isActive?: boolean;
}

// Vehicle Schema Interface
export interface VehiclePosition {
  latitude?: number;
  longitude?: number;
  speed?: number;
  heading?: number;
  updated_at?: Date;
}

export interface VehicleScheduledService {
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
  upcoming_scheduled_service?: VehicleScheduledService[];
  platform_entry_required: boolean;
}
