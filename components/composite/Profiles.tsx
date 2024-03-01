import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { ProfileCard, SmallNegativeMarginContainer } from "@/components";
interface ProfilesProps {
  userIds: string[];
}

export default async function Profiles({ userIds }: ProfilesProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: profiles } = await supabase
    .from("profiles")
    .select()
    .in("user_id", userIds);

  return (
    <div className="flex flex-wrap w-full justify-center">
      {profiles?.map((profile: any, index: number) => (
        <SmallNegativeMarginContainer key={String(index)}>
          <Link href={`/proifili/${profile.id}`}>
            <ProfileCard name={profile.name} image={profile.image} />
          </Link>
        </SmallNegativeMarginContainer>
      ))}
    </div>
  );
}
