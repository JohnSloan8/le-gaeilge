"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { translate } from "./utils";
import { revalidateTag } from "next/cache";

const getIrishTranslation = async (
  formData: FormData,
): Promise<undefined | false> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // const userId: string = String(formData.get("userId"));
  const text: string = String(formData.get("text"));
  const groupIdFromForm = formData.get("groupId"); // only one category for now
  const groupId = groupIdFromForm === "null" ? null : Number(groupIdFromForm);

  const translation: string = await translate(text, "en", "ga");

  const { data: phrase, error } = await supabase
    .from("phrases")
    .insert({
      author_id: "1025c075-68b8-43c0-9a04-734041659499",
      entry_ga: translation,
      entry_en: text,
      group_id: groupId,
      audio_data: null,
    })
    .select()
    .single();

  if (phrase !== null) {
    revalidateTag(`phrases`);
  }

  error !== null && console.log("error:", error);

  return false;
};

export default getIrishTranslation;
