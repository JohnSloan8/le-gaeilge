"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const getUserGroups = async (userId: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: groups, error } = await supabase
    .from("members")
    .select("*, groups(*)")
    .eq("user_id", userId);

  if (error === null) {
    return groups;
  }
  return error;
};

export default getUserGroups;
