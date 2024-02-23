import { createClient } from "@/utils/supabase/client";
import {
  LargeTitle,
  XLargeTitle,
  SmallPaddingContainer,
  MarginTopContainer,
  SmallCapitalisedTitle,
  SmallText,
  CardLink,
  ProfileCard,
  GroupImageLarge,
  MediumTitle,
  EventCardSmall,
} from "@/components";
import { LocationIcon } from "@/icons";

interface PageProps {
  params?: { name: string };
}

export default async function GroupPage({ params }: PageProps) {
  const supabase = createClient();
  const { data: group } = await supabase
    .from("groups")
    .select("*, locations(*), profiles(*), events(*)")
    .match({ URL: params!.name })
    .single();

  return group !== null ? (
    <div className="w-full">
      <MarginTopContainer>
        <XLargeTitle
          text_ga={group.name_ga}
          text_en={group.name_en}
          centered={false}
        />
      </MarginTopContainer>
      <MarginTopContainer>
        <div className="md:flex md:flex-row my-1 md:my-3">
          <div className="md:w-1/2  flex justify-center">
            <GroupImageLarge
              url={group.image} // Replace with the path to your image
            />
          </div>
          <div className="md:w-1/2 ">
            <SmallPaddingContainer>
              <div className="flex">
                <div className="p-1">
                  <LocationIcon />
                </div>
                <SmallCapitalisedTitle
                  text_ga={group.locations.name_ga}
                  text_en={group.locations.name_en}
                />
              </div>
            </SmallPaddingContainer>
          </div>
        </div>
      </MarginTopContainer>
      <MarginTopContainer>
        <LargeTitle text_ga="Foai" text_en="About" />
        <SmallText
          text_ga={group.description_ga}
          text_en={group.description_en}
        />
      </MarginTopContainer>
      <MarginTopContainer>
        <LargeTitle text_ga="Baill" text_en="Members" />
        <div className="flex flex-wrap w-full justify-center">
          {group.profiles?.map((profile: any, index: number) => (
            <div key={index}>
              <CardLink href={`/proifili/${profile.id}`}>
                <ProfileCard name={profile.name} image={profile.image} />
              </CardLink>
            </div>
          ))}
        </div>
      </MarginTopContainer>
      <MarginTopContainer>
        <MediumTitle text_ga="Imeachtaí" text_en="Events" />
        <div className="w-full">
          {group.events.map((event: any, index: number) => (
            <CardLink href={`/imeachtai/${event.id}`} key={index}>
              <SmallPaddingContainer>
                <EventCardSmall
                  name_ga={event.name_ga}
                  name_en={event.name_en}
                  group_name_ga={
                    group.groups &&
                    group.groups.find((g: any) => g.id === event.group_id)
                      .name_ga
                  }
                  group_name_en={
                    group.groups &&
                    group.groups.find((g: any) => g.id === event.group_id)
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
