import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { XLargeText } from "@/components";
import { redirect } from "next/navigation";
import Controller from "./client/Controller";
import Link from "next/link";

interface Props {
  searchParams: { groupId: string; favourite: string; sort: string };
}

export default async function ScruduPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll">
      <XLargeText text_ga="Scrúdú" text_en="Test" />
      <Link href="/scrudu/en-ga">English - Irish</Link>
    </div>
  );
}
