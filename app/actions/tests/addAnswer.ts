"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const addAnswer = async (correct: boolean, phraseId: number) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("phrases_remembered")
    .insert({ phrase_id: phraseId, correct });

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
};

export default addAnswer;
