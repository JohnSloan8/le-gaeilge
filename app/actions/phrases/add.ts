"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

const addPhrase = async (formData: FormData) => {
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
  const categoryId = Number(formData.get("categoryId"));
  const entryGa = String(formData.get("entryGa"));
  const entryEn = String(formData.get("entryEn"));

  const { data, error } = await supabase.from("phrases").insert({
    entry_ga: entryGa,
    entry_en: entryEn,
    group_id: groupId === -1 ? null : Number(groupId),
    category_id: categoryId === -1 ? null : Number(categoryId),
    author_id: user.id,
  });

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidateTag(`phrases`);
};

export default addPhrase;
