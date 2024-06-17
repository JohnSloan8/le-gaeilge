import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { XLargeText } from "@/components";
import { redirect } from "next/navigation";
import Controller from "./client/Controller";

interface Props {
  searchParams: { groupId: string };
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

  const { data: phrases, error: phrasesError } = await supabase.rpc(
    "get_phrases_for_group_by_group_id_with_favourite",
    {
      group_id_input:
        searchParams.groupId === undefined
          ? undefined
          : Number(searchParams.groupId),
      user_id_input: session === null ? undefined : session.user.id,
    },
  );

  if (phrasesError !== null) {
    alert(phrasesError.message);
    // } else {
    //   sortPhrasesForTest(phrases)
  }

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll">
      <XLargeText text_ga="Scrúdú" text_en="Test" />

      <Controller phrases={phrases} />
    </div>
  );
}
