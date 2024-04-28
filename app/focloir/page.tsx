import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { XLargeText } from "@/components";
import Controller from "./client/Controller";

// import { getTranslation } from "@/app/actions";

interface Props {
  searchParams: { groupId: string };
}

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log("data:", session?.user.id);
  // console.log("groupId:", searchParams.groupId);

  const { data: phrases, error: phrasesError } = await supabase.rpc(
    "get_phrases_for_group_by_group_id_with_favourites",
    {
      group_id_input:
        searchParams.groupId !== null
          ? Number(searchParams.groupId)
          : undefined,
      user_id_input: session === null ? undefined : session.user.id,
    },
  );

  // console.log("phrases:", phrases);
  // console.log("searchParams.groupId:", searchParams.groupId);

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll">
      <XLargeText text_ga="Foclóir" text_en="Dictionary" />
      {phrases === null || phrases.length === 0 || phrasesError !== null ? (
        <h1>No Phrases</h1>
      ) : (
        <Controller
          phrases={phrases}
          groupId={searchParams.groupId}
          session={session}
        />
      )}
    </div>
  );
}
