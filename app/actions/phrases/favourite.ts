"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

const favourite = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  console.log("fromData isFavourited", formData.get("isFavourited"));

  const phraseId = Number(formData.get("phraseId"));
  const userId = String(formData.get("userId"));
  const isFavourited = formData.get("isFavourited") === "true";

  console.log("phraseId", phraseId);
  console.log("userId", userId);
  console.log("isFavourited", isFavourited);

  if (isFavourited) {
    console.log("in delete");
    const { data, error } = await supabase
      .from("favourite_phrases")
      .delete()
      .match({ phrase_id: phraseId, user_id: userId });

    data !== null && console.log("data:", data);
    error !== null && console.log("error:", error);
    revalidateTag(`phrases`);
  } else {
    console.log("in insert");

    const { data, error } = await supabase
      .from("favourite_phrases")
      .insert({ phrase_id: phraseId, user_id: userId });

    data !== null && console.log("data:", data);
    error !== null && console.log("error:", error);
    revalidateTag(`phrases`);
  }
};

export default favourite;
