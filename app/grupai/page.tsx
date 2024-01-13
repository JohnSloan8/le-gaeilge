import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { GroupCard } from "@/components";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: groups } = await supabase.from("groups").select();

  return (
    <div className="w-full p-2 flex flex-col items-center">
      <div className="p-4 flex flex-col items-center">
        <div className="text-4xl font-bold">Grupaí</div>
        <div className="text-sm font-light text-english">Groups</div>
      </div>
      <div className="max-w-xl">
        {groups?.map((group, index) => (
          <Link key={index} href={`/grupai/${group.URL}`}>
            <div className="m-1 md:m-3 elevated-2 shadow-md hover:bg-background-100">
              <GroupCard
                name_ga={group.name_ga}
                name_en={group.name_en}
                description_ga={group.description_ga}
                description_en={group.description_en}
                image={group.image}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
