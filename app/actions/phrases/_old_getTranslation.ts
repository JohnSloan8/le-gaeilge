/* This was in use before 'getIrishTranslation' to avoid step of checking language, and then the call to synthesis was separated to speed it up. 
"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  detectLanguage,
  languageToTranslateTo,
  translate,
  getSynthesisAudio,
} from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const getTranslation = async (
  formData: FormData,
): Promise<undefined | false> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // const userId: string = String(formData.get("userId"));
  const text: string = String(formData.get("text"));
  const groupIdFromForm = formData.get("groupId"); // only one category for now
  const groupId = groupIdFromForm === "null" ? null : Number(groupIdFromForm);

  const detectedLanguage: string = await detectLanguage(text);
  // console.log("detectedLanguage:", detectedLanguage);
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

  // console.log("translation:", translation);
  const textToSynthesise = detectedLanguage === "ga" ? text : translation;
  const audioData = await getSynthesisAudio(textToSynthesise);

  const { data, error } = await supabase
    .from("phrases")
    .insert({
      author_id: "1025c075-68b8-43c0-9a04-734041659499",
      entry_ga: detectedLanguage === "ga" ? text : translation,
      entry_en: detectedLanguage === "en" ? text : translation,
      group_id: groupId,
      audio_data: audioData,
    })
    .select();

  if (data !== null) {
    revalidatePath(`/focloir`);
    redirect(`/focloir?groupId=${groupId}`);
  }

  error !== null && console.log("error:", error);

  // .catch((error) => {
  //   console.error("Error:", error);
  // });
  return false;
};

export default getTranslation;
*/
