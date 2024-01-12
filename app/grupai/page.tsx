// import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: groups } = await supabase.from("groups").select();

  return <pre>{JSON.stringify(groups, null, 2)}</pre>;
}
