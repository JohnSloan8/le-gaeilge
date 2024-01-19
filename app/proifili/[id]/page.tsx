import {
  LargeTitle,
  ProfileImageLarge,
  SmallPaddingContainer,
  SmallText,
} from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

interface ProfileProps {
  profileID: number;
}

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);
  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("id", params.id)
    .single();

  console.log("profile:", profile);

  return profile ? (
    <div className="w-full">
      <div className="md:flex md:flex-row">
        <div className="md:w-1/3 flex justify-center">
          <ProfileImageLarge url={profile.image} />
        </div>
        <div className="md:w-2/3 ">
          <SmallPaddingContainer>
            <LargeTitle text_ga={profile.name} text_en="" />
          </SmallPaddingContainer>
          <SmallPaddingContainer>
            <SmallText
              text_ga={`leibhéal ${profile.irish_level}`}
              text_en="Irish level"
            />
          </SmallPaddingContainer>
        </div>
      </div>
      <div></div>
    </div>
  ) : null;
}
