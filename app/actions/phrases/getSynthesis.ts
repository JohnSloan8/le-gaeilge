"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { getSynthesisAudio } from "./utils";
import { revalidateTag } from "next/cache";

const getSynthesis = async (text: string, phraseId: number) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const audioData = await getSynthesisAudio(text);

  const { data, error } = await supabase
    .from("phrases")
    .update({
      audio_data: audioData,
    })
    .eq("id", phraseId)
    .select()
    .single();

  if (data !== null) {
    revalidateTag(`phrases`);
    console.log("still here");
  }
  error !== null && console.log("error:", error);

  return false;
};

export default getSynthesis;
