import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Controller from "./client/Controller";

interface Props {
  searchParams: {
    groupId: string;
    categoryId: string;
    favourite: string;
    sort: string;
  };
}

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: phrases, error: phrasesError } = await supabase.rpc(
    "get_phrases_for_dictionary",
    {
      group_id_input:
        searchParams.groupId === undefined
          ? undefined
          : Number(searchParams.groupId),
      category_id_input:
        searchParams.categoryId === undefined
          ? undefined
          : Number(searchParams.categoryId),
      user_id_input: session === null ? undefined : session.user.id,
    },
  );

  if (phrasesError !== null) {
    console.log(phrasesError.message);
  }

  const { data: groups, error: groupsError } = await supabase
    .from("groups")
    .select();

  if (groupsError !== null) {
    console.log(groupsError.message);
  }

  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select()
    .eq("group_id", searchParams.groupId);

  if (categoriesError !== null) {
    console.log(categoriesError.message);
  }

  return (
    <div className="w-full h-full flex flex-col mt-14">
      <Controller
        phrases={phrases}
        groups={groups}
        group_id={
          searchParams.groupId === undefined
            ? null
            : Number(searchParams.groupId)
        }
        categories={categories}
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
