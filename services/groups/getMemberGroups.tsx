"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const getUserGroups = async (userId: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: member_groups, error } = await supabase
    .from("members")
    .select("*, group:groups(*)")
    .eq("user_id", userId);

  if (error !== null) {
    console.log(`error: ${error.message}`);
    return null;
  } else if (member_groups !== null) {
    return member_groups;
  }
  return null;
};

export default getUserGroups;
