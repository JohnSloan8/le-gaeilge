"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const languageToTranslateTo = (input: string): string => {
  return input === "ga" ? "en" : "ga";
};

const getTranslation = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const userId: string = String(formData.get("userId"));
  const textForDetection: string = String(formData.get("text"));
  const category = Number(formData.get("category"));

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const baseUrl = "https://translation.googleapis.com/language/translate/v2";

  let detectedLanguage: string;

  console.log("textForDetection:", textForDetection);

  // Perform language detection
  fetch(`${baseUrl}/detect?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ q: [textForDetection] }),
  })
    .then(async (response) => await response.json())
    .then(async (data) => {
      console.log("Data:", data.data.detections);

      // Output the detected language
      detectedLanguage = data.data.detections[0][0].language;
      console.log("Detected Language:", detectedLanguage);
      if (!["ga", "en"].includes(detectedLanguage)) {
        throw new Error("detected language not Irish or English");
      }
      // Now, you can use the detected language for translation if needed

      const translationParams = {
        q: textForDetection,
        source: detectedLanguage,
        target: languageToTranslateTo(detectedLanguage),
        key: apiKey,
      };

      console.log("translationParams:", translationParams);

      // Perform the translation request
      return await fetch(`${baseUrl}?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(translationParams),
      });
    })
    .then(async (response) => await response.json())
    .then(async (resposeData) => {
      const translation = resposeData.data.translations[0].translatedText;

      const { data, error } = await supabase
        .from("phrases")
        .insert({
          author_id: userId,
          entry_ga: detectedLanguage === "ga" ? textForDetection : translation,
          entry_en: detectedLanguage === "en" ? textForDetection : translation,
        })
        .select();

      data !== null && console.log("data:", data);
      error !== null && console.log("error:", error);
      revalidatePath(`/focloir`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default getTranslation;
