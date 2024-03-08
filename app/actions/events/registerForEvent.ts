"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const registerForEvent = async (formData: FormData) => {
  const cookieStoreAction = cookies();
  const supabaseAction = createClient(cookieStoreAction);

  console.log("formData:", formData);

  const eventId = Number(formData.get("eventId"));
  const userId = String(formData.get("userId"));

  if (eventId !== null && userId !== null) {
    const { data, error } = await supabaseAction
      .from("attendees")
      .insert({ event_id: eventId, user_id: userId });

    data !== null && console.log("data:", data);
    error !== null && console.log("error:", error);
    revalidatePath(`/imeachtai/${eventId}`);
  }
};

export default registerForEvent;
