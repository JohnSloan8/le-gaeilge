"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const cancelRegistrationForEvent = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const attendeeId = formData.get("attendeeId");
  const eventId = formData.get("eventId");

  const { data, error } = await supabase
    .from("attendees")
    .delete()
    .eq("id", attendeeId);
  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidatePath(`/imeachtai/${eventId}`);
};

export default cancelRegistrationForEvent;
