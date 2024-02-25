"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const registerForEvent = async (formData: FormData) => {
  const cookieStoreAction = cookies();
  const supabaseAction = createClient(cookieStoreAction);

  const eventId = formData.get("eventId");
  const userId = formData.get("userId");

  const { data, error } = await supabaseAction
    .from("attendees")
    .insert({ event_id: eventId, user_id: userId });

  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidatePath(`/imeachtai/${eventId}`);
};

export default registerForEvent;
