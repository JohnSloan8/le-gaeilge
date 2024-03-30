import type { Database } from "./supabase";

export type GroupModel = Database["public"]["Tables"]["groups"]["Row"];
export type EventModel = Database["public"]["Tables"]["events"]["Row"];
export type PhraseModel = Database["public"]["Tables"]["phrases"]["Row"];
export type LocationModel = Database["public"]["Tables"]["locations"]["Row"];
export type AttendeeModel = Database["public"]["Tables"]["attendees"]["Row"];

export interface ExtendedEventModel extends EventModel {
  location: LocationModel | null;
  group: GroupModel | null;
  attendees: AttendeeModel[] | null;
}
