import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  GroupCard,
  XLargeTitle,
  SmallPaddingContainer,
  SmallTopPaddingContainer,
} from "@/components";

export default async function GroupsPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: groups } = await supabase
    .from("groups")
    .select(`*, location:locations(*), members:members(*)`);

  return (
    <div className="w-full flex flex-col items-center">
      <XLargeTitle text_ga="Grupaí" text_en="Groups" />
      <div className="w-full">
        {groups?.map((group, index) => (
          <div key={index}>
            <Link href={`/grupai/${group.URL}`}>
              <SmallTopPaddingContainer>
                <GroupCard
                  name_ga={group.name_ga}
                  name_en={group.name_en}
                  location_ga={group.location.name_ga}
                  location_en={group.location.name_en}
                  description_ga={group.description_ga}
                  description_en={group.description_en}
                  image={group.image}
                  members={group.members}
                />
              </SmallTopPaddingContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
