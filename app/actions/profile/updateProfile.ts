"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const updateProfile = async (dialect: string, id: number) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("profiles")
    .update({ dialect })
    .eq("id", id);

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
};

export default updateProfile;
