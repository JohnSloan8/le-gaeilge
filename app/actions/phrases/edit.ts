"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

const editPhrase = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const phraseId = Number(formData.get("phraseId"));
  const entryGa = String(formData.get("entryGa"));
  const entryEn = String(formData.get("entryEn"));

  const { data, error } = await supabase
    .from("phrases")
    .update({ entry_ga: entryGa, entry_en: entryEn, edited: true })
    .eq("id", phraseId);

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidateTag(`phrases`);
};

export default editPhrase;
