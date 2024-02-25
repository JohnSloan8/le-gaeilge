"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const joinGroup = async (formData: FormData) => {
  const cookieStoreAction = cookies();
  const supabaseAction = createClient(cookieStoreAction);

  const groupId = formData.get("groupId");
  const groupURL = formData.get("groupURL");
  const userId = formData.get("userId");

  const { data, error } = await supabaseAction
    .from("members")
    .insert({ group_id: groupId, user_id: userId });

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidatePath(`/grupai/${groupURL}`);
};

export default joinGroup;
