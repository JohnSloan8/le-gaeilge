import type { Database } from "./supabase";

export type GroupModel = Database["public"]["Tables"]["groups"]["Row"];
