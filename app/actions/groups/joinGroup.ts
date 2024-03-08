"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const joinGroup = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const groupId = Number(formData.get("groupId"));
  const groupURL = String(formData.get("groupURL"));
  const userId = String(formData.get("userId"));

  const { data, error } = await supabase
    .from("members")
    .insert({ group_id: groupId, user_id: userId });

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidatePath(`/grupai/${groupURL}`);
};

export default joinGroup;
