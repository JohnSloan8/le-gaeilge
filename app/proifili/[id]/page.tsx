import {
  Groups,
  XLargeTitle,
  ProfileImageLarge,
  GroupCardSmall,
  EventCardSmall,
  SmallPaddingContainer,
  MarginTopContainer,
  SmallMarginContainer,
  MediumTitle,
  SmallText,
} from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
// import { getMemberGroups } from "@/services";
import Link from "next/link";

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

  // const memberGroups = profile !== null ? await getMemberGroups(profile.user_id) : [];

  const { data: memberGroups } = await supabase
    .from("members")
    .select("*, group:groups(*)")
    .eq("user_id", profile !== null ? profile.user_id : 0);

  return profile !== null ? (
    <div className="w-full">
      <XLargeTitle text_ga={profile.name} text_en="" />
      <MarginTopContainer>
        <div className="w-full flex md:flex-row flex-col items-center">
          <ProfileImageLarge url={profile.image} />

          <div className="flex flex-col">
            <div className="flex flex-row">
              <SmallPaddingContainer>
                <SmallText text_ga={`leibhéal`} text_en="Irish level" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${profile.irish_level}`} text_en="" />
              </SmallPaddingContainer>
            </div>
            <div className="flex">
              <SmallPaddingContainer>
                <SmallText text_ga={`grupaí`} text_en="groups" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${groups.length}`} text_en="" />
              </SmallPaddingContainer>
            </div>
            <div className="flex">
              <SmallPaddingContainer>
                <SmallText text_ga={`imeachtaí`} text_en="events" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${profile.events.length}`} text_en="" />
              </SmallPaddingContainer>
            </div>
          </div>
        </div>
      </MarginTopContainer>

      <MarginTopContainer>
        <MediumTitle text_ga="Groupaí" text_en="Groups" />
        <div className="flex flex-wrap w-full justify-center">
          <Groups
            groups={
              memberGroups !== null ? memberGroups.map((mG) => mG.group) : null
            }
          />
        </div>
      </MarginTopContainer>

      <MarginTopContainer>
        <MediumTitle text_ga="Imeachtaí" text_en="Events" />
        {/* <div className="w-full">
          {profile.events.map((event: any, index: number) => (
            <SmallMarginContainer key={String(index)}>
              <Link href={`/imeachtai/${event.id}`}>
                <EventCardSmall
                  name_ga={event.name_ga}
                  name_en={event.name_en}
                  group_name_ga={
                    profile.groups !== undefined &&
                    profile.groups.find((g: any) => g.id === event.group_id)
                      .name_ga
                  }
                  group_name_en={
                    profile.groups !== undefined &&
                    profile.groups.find((g: any) => g.id === event.group_id)
                      .name_en
                  }
                  start_date={event.start_date}
                  start_time={event.start_time}
                  end={event.end}
                  image={event.image}
                />
              </Link>
            </SmallMarginContainer>
          ))}
        </div> */}
      </MarginTopContainer>
    </div>
  ) : null;
}
