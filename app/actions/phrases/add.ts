"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

const addPhrase = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const groupId = Number(formData.get("groupId"));
  const entryGa = String(formData.get("entryGa"));
  const entryEn = String(formData.get("entryEn"));

  const { data, error } = await supabase
    .from("phrases")
    .insert({ entry_ga: entryGa, entry_en: entryEn, group_id: groupId });

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidateTag(`phrases`);
};

export default addPhrase;
