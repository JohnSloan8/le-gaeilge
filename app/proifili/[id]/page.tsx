import {
  Groups,
  Events,
  XLargeTitle,
  ProfileImageLarge,
  SmallPaddingContainer,
  MarginTopContainer,
  MediumTitle,
  SmallText,
} from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

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

  if (profile === null) {
    return <h1>No profile available</h1>;
  } else {
    const { data: groups, error: groupsError } = await supabase.rpc(
      "get_user_groups",
      {
        user_id_input: profile.user_id,
      },
    );
    console.log("groups:", groups);

    if (groupsError !== null) {
      alert(groupsError.message);
    }

    const { data: events, error: eventsError } = await supabase.rpc(
      "get_user_events",
      {
        user_id_input: profile.user_id,
      },
    );
    console.log("events:", events);
    if (eventsError !== null) {
      alert(eventsError.message);
    }

    return (
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
                  <MediumTitle
                    text_ga={`${groups !== null ? groups.length : 0}`}
                    text_en=""
                  />
                </SmallPaddingContainer>
              </div>
              <div className="flex">
                <SmallPaddingContainer>
                  <SmallText text_ga={`imeachtaí`} text_en="events" />
                </SmallPaddingContainer>
                <SmallPaddingContainer>
                  <MediumTitle
                    text_ga={`${events !== null ? events.length : 0}`}
                    text_en=""
                  />
                </SmallPaddingContainer>
              </div>
            </div>
          </div>
        </MarginTopContainer>

        <MarginTopContainer>
          <MediumTitle text_ga="Groupaí" text_en="Groups" />
          <div className="flex flex-wrap w-full justify-center">
            <Groups groups={groups} />
          </div>
        </MarginTopContainer>

        <MarginTopContainer>
          <MediumTitle text_ga="Imeachtaí" text_en="Events" />
          <div className="flex flex-wrap w-full justify-center">
            <Events events={events} groups={groups} />
          </div>
        </MarginTopContainer>
      </div>
    );
  }
}
