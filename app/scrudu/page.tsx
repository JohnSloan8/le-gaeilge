import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { XLargeText, Text, SmallText, SubmitButton } from "@/components";
import { redirect } from "next/navigation";
import { chooseTest } from "../actions";

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
    alert(groupsError.message);
  }

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll">
      <XLargeText text_ga="Scrúdú" text_en="Test" />

      {/* <Controller groups={groups} /> */}
      <form action={chooseTest} className="bg-white p-6 rounded shadow-md m-2">
        <Text
          text_ga="Frásaí a Roghnú"
          text_en="Choose Phrases"
          centered={true}
        />

        <div className="my-4">
          <label htmlFor="groupId" className="block text-gray-700 mb-1">
            <SmallText text_en="Group" text_ga="Grúpa" />
          </label>
          <select
            id="groupId"
            name="groupId"
            className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Roghnaigh (choose)</option>
            {groups?.map((group, index) => (
              <option
                key={index}
                value={String(group.id)}
                className="text-gray-700"
              >{`${group.name_ga} (${group.name_en})`}</option>
            ))}
          </select>
        </div>

        <div className="my-4">
          <label htmlFor="noQuestions" className="block text-gray-700 mb-1">
            <SmallText text_en="No. of Questions" text_ga="Líon Ceisteanna" />
          </label>
          <select
            id="noQuestions"
            name="noQuestions"
            className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="flex justify-center pt-4">
          <SubmitButton>
            <div className="w-64 border rounded-md bg-primary-600">
              <SmallText text_ga="dul" text_en="go" dark={true} />
            </div>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
