"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { getSynthesisAudio, base64ToMp3 } from "./utils";
import { revalidateTag } from "next/cache";

const getSynthesis = async (text: string, phraseId: number) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const audioData: string = await getSynthesisAudio(text);
  const mp3Blob = base64ToMp3(audioData);

  console.log("getting synthesis");

  const { data, error } = await supabase.storage
    .from("audio")
    .upload(`${phraseId}.mp3`, mp3Blob, {
      contentType: "audio/mpeg",
    });

  const { data: phraseData, error: phraseError } = await supabase
    .from("phrases")
    .update({
      audio_data: true,
    })
    .eq("id", phraseId)
    .select()
    .single();

  if (data !== null && phraseData !== null) {
    console.log("data:", data);
    revalidateTag(`phrases`);
    // console.log("still here");
  }
  error !== null && console.log("error:", error);
  phraseError !== null && console.log("phraseError:", phraseError);

  return false;
};

export default getSynthesis;
