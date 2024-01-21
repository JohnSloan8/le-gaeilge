import {
  LargeTitle,
  ProfileImageLarge,
  GroupCardSmall,
  EventCardSmall,
  SmallPaddingContainer,
  MarginTopContainer,
  MediumTitle,
  SmallText,
  CardLink,
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
    .select("*, groups(*), events(*) ")
    .eq("id", params.id)
    .single();

  return profile ? (
    <div className="w-full">
      <MarginTopContainer>
        <div className="md:flex md:flex-row">
          <div className="md:w-1/3 flex justify-center">
            <ProfileImageLarge url={profile.image} />
          </div>
          <div className="md:w-2/3 ">
            <SmallPaddingContainer>
              <LargeTitle text_ga={profile.name} text_en="" />
            </SmallPaddingContainer>
            <div className="flex items-center">
              <SmallPaddingContainer>
                <SmallText text_ga={`leibhéal`} text_en="Irish level" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${profile.irish_level}`} text_en="" />
              </SmallPaddingContainer>
            </div>
            <div className="flex items-center">
              <SmallPaddingContainer>
                <SmallText text_ga={`grupaí`} text_en="groups" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${profile.groups.length}`} text_en="" />
              </SmallPaddingContainer>
            </div>
            <div className="flex items-center">
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
          {profile.groups.map((g: any, index: number) => (
            <div key={index}>
              <CardLink href={`/grupai/${g.URL}`}>
                <GroupCardSmall
                  text_ga={`${g.name_ga}`}
                  text_en={`${g.name_en}`}
                  image={`${g.image}`}
                />
              </CardLink>
            </div>
          ))}
        </div>
      </MarginTopContainer>

      <MarginTopContainer>
        <MediumTitle text_ga="Imeachtaí" text_en="Events" />
        <div className="w-full">
          {profile.events.map((event: any, index: number) => (
            <CardLink href={`/imeachtai/${event.id}`} key={index}>
              <SmallPaddingContainer>
                <EventCardSmall
                  name_ga={event.name_ga}
                  name_en={event.name_en}
                  group_name_ga={
                    profile.groups &&
                    profile.groups.find((g: any) => g.id === event.group_id)
                      .name_ga
                  }
                  group_name_en={
                    profile.groups &&
                    profile.groups.find((g: any) => g.id === event.group_id)
                      .name_en
                  }
                  start_date={event.start_date}
                  start_time={event.start_time}
                  end={event.end}
                  image={event.image}
                />
              </SmallPaddingContainer>
            </CardLink>
          ))}
        </div>
      </MarginTopContainer>
    </div>
  ) : null;
}
