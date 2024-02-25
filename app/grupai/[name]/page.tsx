import { createClient } from "@/utils/supabase/server";
import { joinGroup, leaveGroup } from "@/actions";
import Link from "next/link";
import {
  LargeTitle,
  XLargeTitle,
  SmallPaddingContainer,
  SmallMarginContainer,
  MarginTopContainer,
  SmallCapitalisedTitle,
  SmallText,
  GroupImageLarge,
  MediumTitle,
  EventCardSmall,
  Profiles,
  PrimaryButton,
  SecondaryButton,
  WarningButton,
} from "@/components";
import { cookies } from "next/headers";
import { LocationIcon } from "@/icons";

interface PageProps {
  params: { name: string };
}

export default async function GroupPage({ params }: PageProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: group } = await supabase
    .from("groups")
    .select("*, location:locations(*), members(*), events(*)")
    .match({ URL: params.name })
    .single();

  const memberIds = group.members.map((a: any) => a.user_id);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const memberOfThisGroup = (): boolean => {
    return user !== null ? memberIds.includes(user.id) : false;
  };

  return group !== null ? (
    <div className="w-full">
      <XLargeTitle text_ga={group.name_ga} text_en={group.name_en} />
      <MarginTopContainer>
        {user !== null ? (
          memberOfThisGroup() ? (
            <form action={leaveGroup}>
              <input type="hidden" name="groupURL" value={group.URL} />
              <input
                type="hidden"
                name="memberId"
                value={group.members.find((m: any) => m.user_id === user.id).id}
              />
              <div className="flex flex-row gap-4 items-center">
                <SmallText text_ga="Is ball thú" text_en="You are a member" />
                <WarningButton text_ga="Fág" text_en="Leave" />
              </div>
            </form>
          ) : (
            <form action={joinGroup}>
              <input type="hidden" name="groupId" value={group.id} />
              <input type="hidden" name="groupURL" value={group.URL} />
              <input type="hidden" name="userId" value={user.id} />
              <PrimaryButton text_ga="Join" text_en="Join" />
            </form>
          )
        ) : (
          <SecondaryButton text_ga="Join" text_en="Join" />
        )}
      </MarginTopContainer>
      <MarginTopContainer>
        <div className="md:flex md:flex-row">
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
                  text_ga={group.location.name_ga}
                  text_en={group.location.name_en}
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
        <Profiles userIds={memberIds} />
      </MarginTopContainer>
      <MarginTopContainer>
        <MediumTitle text_ga="Imeachtaí" text_en="Events" />
        <div className="w-full">
          {group.events.map((event: any, index: number) => (
            <MarginTopContainer key={index}>
              <Link href={`/imeachtai/${event.id}`}>
                <EventCardSmall
                  name_ga={event.name_ga}
                  name_en={event.name_en}
                  group_name_ga={
                    group.groups !== undefined &&
                    group.groups.find((g: any) => g.id === event.group_id)
                      .name_ga
                  }
                  group_name_en={
                    group.groups !== undefined &&
                    group.groups.find((g: any) => g.id === event.group_id)
                      .name_en
                  }
                  start_date={event.start_date}
                  start_time={event.start_time}
                  end={event.end}
                  image={event.image}
                />
              </Link>
            </MarginTopContainer>
          ))}
        </div>
      </MarginTopContainer>
    </div>
  ) : null;
}
