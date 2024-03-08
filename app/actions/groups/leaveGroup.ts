"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const leaveGroup = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const memberId = Number(formData.get("memberId"));
  const groupURL = String(formData.get("groupURL"));

  console.log("memberId", memberId);

  const { data, error } = await supabase
    .from("members")
    .delete()
    .eq("id", memberId);
  data !== null && console.log("data:", data);
  error !== null && console.log("error:", error);
  revalidatePath(`/imeachtai/${groupURL}`);
};

export default leaveGroup;
