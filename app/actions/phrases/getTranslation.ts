"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { detectLanguage, languageToTranslateTo, translate } from "./utils";
import { revalidatePath } from "next/cache";

const getTranslation = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // const userId: string = String(formData.get("userId"));
  const text: string = String(formData.get("text"));
  const groupId = Number(formData.get("groupId")); // only one category for now

  const detectedLanguage: string = await detectLanguage(text);
  console.log("detectedLanguage:", detectedLanguage);
  if (!["ga", "en"].includes(detectedLanguage)) {
    throw new Error("detected language not Irish or English");
  }

  const languageTo = languageToTranslateTo(detectedLanguage);
  // Now, you can use the detected language for translation if needed
  const translation: string = await translate(
    text,
    detectedLanguage,
    languageTo,
  );

  console.log("translation:", translation);

  const { data, error } = await supabase
    .from("phrases")
    .insert({
      author_id: "1025c075-68b8-43c0-9a04-734041659499",
      entry_ga: detectedLanguage === "ga" ? text : translation,
      entry_en: detectedLanguage === "en" ? text : translation,
      group_id: groupId,
    })
    .select();

  data !== null && revalidatePath(`/focloir`);
  error !== null && console.log("error:", error);

  // .catch((error) => {
  //   console.error("Error:", error);
  // });
};

export default getTranslation;
