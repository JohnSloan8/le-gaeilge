"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

const addCategory = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user === null) {
    console.log("user is null");
    return null;
  }

  const groupId = Number(formData.get("groupId"));
  const entryGa = String(formData.get("entryGa"));
  const entryEn = String(formData.get("entryEn"));

  const { data, error } = await supabase.from("categories").insert({
    name_ga: entryGa,
    name_en: entryEn,
    group_id: groupId === -1 ? null : Number(groupId),
  });

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidateTag(`categories`);
};

export default addCategory;
