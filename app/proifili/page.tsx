import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  ProfileCard,
  XLargeTitle,
  SmallPaddingContainer,
  CardLink,
} from "@/components";
import Link from "next/link";

export default async function ProfilesPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: profiles } = await supabase.from("profiles").select();

  return (
    <div className="w-full flex flex-col items-center">
      <SmallPaddingContainer>
        <XLargeTitle text_ga="Proifilí" text_en="profiles" />
      </SmallPaddingContainer>
      <div className="flex flex-wrap w-full justify-center">
        {profiles?.map((profile, index) => (
          <CardLink href={`/proifili/${profile.id}`} key={String(index)}>
            <ProfileCard name={profile.name} image={profile.image} />
          </CardLink>
        ))}
      </div>
    </div>
  );

  return <pre>{JSON.stringify(profiles, null, 2)}</pre>;
}
