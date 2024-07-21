import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { MediumText, SmallText, SubmitButton } from "@/components";
import Link from "next/link";
import { redirect } from "next/navigation";
import { updateProfile } from "../actions";

export default async function ProfilesPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select()
    .eq("user_id", session.user.id)
    .single();

  if (profileError !== null) {
    console.log(profileError.message);
    return <h1>no profile</h1>;
  }
  console.log("profile:", profile);

  const { data: dialects, error: dialectsError } = await supabase
    .from("dialects")
    .select();

  if (dialectsError !== null) {
    console.log(dialectsError.message);
    return <h1>no dialects</h1>;
  }

  console.log("dialects:", dialects);

  const levels = [
    "low beginner",
    "high beginner",
    "low intermediate",
    "high intermediate",
    "low advanced",
    "high advanced",
    "fluent",
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <form
            action={updateProfile}
            className="bg-white p-6 rounded shadow-md m-2"
          >
            <MediumText
              text_ga="Update your Profile"
              text_en="Update your Profile"
              centered={true}
            />

            <div className="my-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">
                <SmallText text_en="Name" text_ga="Ainm" />
              </label>
              <input
                placeholder={profile.name}
                className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="name"
                type="text"
              />
            </div>

            <div className="my-4">
              <label htmlFor="groupId" className="block text-gray-700 mb-1">
                <SmallText text_en="Dialect" text_ga="Dialect" />
              </label>
              <select
                id="groupId"
                name="groupId"
                className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {dialects?.map((dialect, index) => (
                  <option
                    key={index}
                    value={String(dialect.id)}
                    className="text-gray-700"
                  >{`${dialect.name}`}</option>
                ))}
              </select>
            </div>

            <div className="my-4">
              <label htmlFor="groupId" className="block text-gray-700 mb-1">
                <SmallText text_en="Irish Level" text_ga="Irish Level" />
              </label>
              <select
                id="IrishLevel"
                name="IrishLevel"
                className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels?.map((level, index) => (
                  <option key={index} value={level} className="text-gray-700">
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center pt-4">
              <SubmitButton>
                <div className="w-64 border rounded-md bg-primary-600">
                  <SmallText text_ga="update" text_en="update" dark={true} />
                </div>
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
