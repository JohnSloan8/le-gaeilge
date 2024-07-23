import type { Database } from "./supabase";

export type GroupModel = Database["public"]["Tables"]["groups"]["Row"];
export type EventModel = Database["public"]["Tables"]["events"]["Row"];
export type PhraseModel = Database["public"]["Tables"]["phrases"]["Row"];
export type AttendeeModel = Database["public"]["Tables"]["attendees"]["Row"];
export type LocationModel = Database["public"]["Tables"]["locations"]["Row"];
export type CategoryModel = Database["public"]["Tables"]["categories"]["Row"];

type PhraseModelWithFavouritesArray =
  Database["public"]["Functions"]["get_phrases_for_dictionary"]["Returns"];
type ElementType = PhraseModelWithFavouritesArray[number];
export type PhraseModelWithFavourites = ElementType;

type PhraseModelForTestArray =
  Database["public"]["Functions"]["get_phrases_for_test"]["Returns"];
type ElementTypeForTest = PhraseModelForTestArray[number];
export type PhraseModelForTest = ElementTypeForTest;

export interface ExtendedEventModel extends EventModel {
  group: GroupModel | null;
  attendees: AttendeeModel[] | null;
  location: LocationModel;
}

// Non Supabase Models

export interface IconModel {
  color: string;
  size: number;
  filled?: boolean;
}

export interface NavbarLinksModel {
  name_ga: string;
  name_en: string;
  link: string;
  icon: ({ color, size, filled }: IconModel) => React.JSX.Element;
  showLink: boolean;
}
