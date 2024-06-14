import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { XLargeText } from "@/components";
import Controller from "./client/Controller";

interface Props {
  searchParams: { groupId: string; favourite: string; sort: string };
}

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

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
  }

  const { data: groups, error: groupsError } = await supabase
    .from("groups")
    .select();

  if (groupsError !== null) {
    alert(groupsError.message);
  }

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll">
      <XLargeText text_ga="Foclóir" text_en="Dictionary" />

      <Controller
        phrases={phrases}
        groups={groups}
        group_id={
          searchParams.groupId === undefined
            ? null
            : Number(searchParams.groupId)
        }
        session={session}
        favourite={
          searchParams.favourite !== undefined
            ? searchParams.favourite === "true"
            : false
        }
        sort={searchParams.sort !== undefined ? searchParams.sort : null}
      />
    </div>
  );
}
