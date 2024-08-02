import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { SmallText, SubmitButton, MediumText } from "@/components";
import { redirect } from "next/navigation";
import { chooseTest } from "../actions";
import Controller from "./Controller";

export default async function ScruduPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const { data: groups, error: groupsError } = await supabase
    .from("groups")
    .select();

  if (groupsError !== null) {
    console.log(groupsError.message);
  }

  if (groups === null) {
    return <h1>no groups</h1>;
  }

  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select();

  console.log("categories", categories);

  if (categoriesError !== null) {
    console.log(categoriesError.message);
  }

  if (categories === null) {
    return <h1>no categories</h1>;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <Controller groups={groups} categories={categories} />
        </div>
      </div>
    </div>
  );
}
