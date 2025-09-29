// src/database/schemas/products.schema.ts
import { Schema, HydratedDocument } from 'mongoose';

//-------------------------------------------
// Interfaces
export interface ProductOption {
  title?: string;
  bokun_code?: string;
  is_private?: boolean;
  is_guided?: boolean;
  pickup_included?: boolean;
  requires_vehicle?: boolean;
  requires_platform_entry?: boolean;
  requires_traveller_details_form?: boolean;
  guide_assignment_identifier?: string | null;
  description?: string;
  meeting_point_id?: string;
  crewRoles?: string[];
}

export interface StartTime {
  time_slot?: string;
  isDefaultPickupTime?: boolean;
  label?: string;
  bokun_start_time_id?: string;
}

export interface ProductPicture {
  file_id?: string;
  caption?: string;
  alt?: string;
  description?: string;
}

export interface ItineraryStep {
  title?: string;
  description?: string;
  duration_text?: string;
  duration_value_in_minutes?: number;
}

export interface Product {
  index?: number | null;
  title?: string | null;
  options?: ProductOption[] | null;
  start_times?: StartTime[] | null;
  platform_product_name?: string | null;
  bokun_product_code?: string | null;
  location?: {
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
  };
  meeting_point_id?: string | null;
  slug?: string | null;
  product_pictures?: ProductPicture[] | null;
  guide_assignment_identifier?: string | null;
  activity_level?: string | null;
  additional_info?: string[] | null;
  special_instructions?: string[] | null;
  itinerary?: ItineraryStep[] | null;
  highlights?: string[] | null;
  product_short_description?: string | null;
  product_full_description?: string | null;
  inclusions?: string[] | null;
  exclusions?: string[] | null;
  pricing_options?: string[] | null;
  destinations?: string[] | null;
  tour_types?: string[] | null;
  tour_duration?: string | null;
  tour_duration_type?: string | null;
  tour_categories?: string[] | null;
  crewGroups?: string[] | null;
  crewRoles?: string[] | null;
  review_link?: string | null;
  affiliate_link?: string | null;
  isPublished?: boolean | null;
  market_price?: number | null;
  isAvailableInPlan?: boolean | null;
  suggested_products?: string[] | null;
  isCompleted?: boolean | null;
  disclaimers?: string[] | null;
}

//-------------------------------------------
// Schema
const productsSchema = new Schema<Product>(
  {
    index: { type: Number, default: null },
    title: { type: String, default: null },
    options: { type: [Object], default: null },
    start_times: { type: [Object], default: null },
    platform_product_name: { type: String, default: null },
    bokun_product_code: { type: String, default: null },
    location: {
      type: {
        address: { type: String, default: null },
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null },
      },
      default: { address: null, latitude: null, longitude: null },
    },
    meeting_point_id: { type: String, default: null },
    slug: { type: String, default: null },
    product_pictures: { type: [Object], default: null },
    guide_assignment_identifier: { type: String, default: null },
    activity_level: { type: String, default: null },
    additional_info: { type: [String], default: null },
    special_instructions: { type: [String], default: null },
    itinerary: { type: [Object], default: null },
    highlights: { type: [String], default: null },
    product_short_description: { type: String, default: null },
    product_full_description: { type: String, default: null },
    inclusions: { type: [String], default: null },
    exclusions: { type: [String], default: null },
    pricing_options: { type: [String], default: null },
    destinations: { type: [String], default: null },
    tour_types: { type: [String], default: null },
    tour_duration: { type: String, default: null },
    tour_duration_type: { type: String, default: null },
    tour_categories: { type: [String], default: null },
    crewGroups: { type: [String], default: null },
    crewRoles: { type: [String], default: null },
    review_link: { type: String, default: null },
    affiliate_link: { type: String, default: null },
    isPublished: { type: Boolean, default: null },
    market_price: { type: Number, default: null },
    isAvailableInPlan: { type: Boolean, default: null },
    suggested_products: { type: [String], default: null },
    isCompleted: { type: Boolean, default: null },
    disclaimers: { type: [String], default: null },
  },
  { timestamps: true, minimize: false }
);

//-------------------------------------------
// HydratedDocument type
export type ProductDocument = HydratedDocument<Product>;

//-------------------------------------------
export default productsSchema;
