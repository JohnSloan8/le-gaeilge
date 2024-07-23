"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

const updateProfile = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const profileId = Number(formData.get("profileId"));
  const name = String(formData.get("name"));
  const dialect = String(formData.get("dialect"));
  const irish_level = String(formData.get("irishLevel"));
  console.log("in updateProfile", profileId, name, dialect, irish_level);
  const { data, error } = await supabase
    .from("profiles")
    .update({ dialect, name, irish_level })
    .eq("id", profileId);

  console.log("data:", data);

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidateTag(`profiles`);
};

export default updateProfile;
