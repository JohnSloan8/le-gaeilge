import type { Database } from "./supabase";

export type GroupModel = Database["public"]["Tables"]["groups"]["Row"];
export type EventModel = Database["public"]["Tables"]["events"]["Row"];
export type PhraseModel = Database["public"]["Tables"]["phrases"]["Row"];
export type AttendeeModel = Database["public"]["Tables"]["attendees"]["Row"];
export type LocationModel = Database["public"]["Tables"]["locations"]["Row"];

type PhraseModelWithFavouritesArray =
  Database["public"]["Functions"]["get_phrases_for_group_by_group_id_with_favourite"]["Returns"];
type ElementType = PhraseModelWithFavouritesArray[number];
export type PhraseModelWithFavourites = ElementType;

export interface ExtendedEventModel extends EventModel {
  group: GroupModel | null;
  attendees: AttendeeModel[] | null;
  location: LocationModel;
}
