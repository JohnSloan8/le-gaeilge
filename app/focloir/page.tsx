import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Controller from "./client/Controller";

interface Props {
  searchParams: {
    groupId?: string;
    categoryId?: string;
    favourite?: string;
    sort?: string;
    search?: string;
  };
}

export default async function FocloirPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const groupId =
    searchParams.groupId !== undefined ? Number(searchParams.groupId) : -1;
  const categoryId =
    searchParams.categoryId !== undefined
      ? Number(searchParams.categoryId)
      : -1;
  const favourite =
    searchParams.favourite !== undefined
      ? Boolean(searchParams.favourite)
      : undefined;
  const sort = searchParams.sort !== undefined ? searchParams.sort : undefined;
  const search = searchParams.search !== undefined ? searchParams.search : "";

  const { data: phrases, error: phrasesError } = await supabase.rpc(
    "get_phrases_for_dictionary",
    {
      group_id_input: groupId === -1 ? undefined : groupId,
      category_id_input: categoryId === -1 ? undefined : categoryId,
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
    .eq("group_id", `${groupId === undefined ? null : groupId}`);

  if (categoriesError !== null) {
    console.log(categoriesError.message);
  }

  return (
    <div className="w-full h-full flex flex-col mt-14">
      <Controller
        phrases={phrases}
        groups={groups}
        group_id={groupId}
        category_id={categoryId}
        categories={categories}
        session={session}
        favourite={favourite}
        search={search}
        sort={sort}
      />
    </div>
  );
}
