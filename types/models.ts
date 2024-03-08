import type { Database } from "./supabase";

export type GroupModel = Database["public"]["Tables"]["groups"]["Row"];
export type EventModel = Database["public"]["Tables"]["events"]["Row"];
export type PhraseModel = Database["public"]["Tables"]["phrases"]["Row"];
