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

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const groupId: number | undefined = ["null", undefined].includes(
    searchParams.groupId,
  )
    ? undefined
    : Number(searchParams.groupId);
  const categoryId: number | undefined = ["null", undefined].includes(
    searchParams.categoryId,
  )
    ? undefined
    : Number(searchParams.categoryId);
  const favourite: boolean | undefined = ["null", undefined].includes(
    searchParams.favourite,
  )
    ? undefined
    : Boolean(searchParams.favourite);
  const sort: string | undefined = ["null", undefined].includes(
    searchParams.sort,
  )
    ? undefined
    : String(searchParams.sort);
  const search: string | undefined = ["null", undefined].includes(
    searchParams.search,
  )
    ? undefined
    : String(searchParams.search);

  console.log("groupId:", groupId);
  console.log("categoryId:", categoryId);
  console.log("favourite:", favourite);
  console.log("sort:", sort);
  console.log("search:", search);

  const { data: phrases, error: phrasesError } = await supabase.rpc(
    "get_phrases_for_dictionary",
    {
      group_id_input: groupId,
      category_id_input: categoryId,
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
    .eq("group_id", `${searchParams.groupId === undefined ? null : groupId}`);

  if (categoriesError !== null) {
    console.log(categoriesError.message);
  }

  console.log("searchParams.groupId:", searchParams.groupId);

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
        search={
          searchParams.search === undefined ? "" : String(searchParams.search)
        }
        sort={searchParams.sort !== undefined ? searchParams.sort : null}
      />
    </div>
  );
}
