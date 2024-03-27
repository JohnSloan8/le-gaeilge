import { createClient } from "@/utils/supabase/server";
import { joinGroup, leaveGroup } from "@/app/actions";
import Link from "next/link";
import {
  LargeTitle,
  XLargeTitle,
  SmallPaddingContainer,
  MarginTopContainer,
  SmallMarginTopContainer,
  SmallCapitalisedTitle,
  SmallText,
  GroupImageLarge,
  EventCardSmall,
  Profiles,
  SecondaryButton,
  WarningButton,
  ContentSection,
  Phrases,
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
    .select("*, location:locations(*), members(*), events(*), categories(*)")
    .match({ URL: params.name })
    .single();

  if (group === null) {
    return <h1>No Group</h1>;
  } else {
    const memberIds =
      group !== null ? group.members.map((a: any) => a.user_id) : [];

    const groupCategories = group.categories.map((c) => c.id);

    const { data: phrases } = await supabase.rpc("get_categories_phrases", {
      categories_input: groupCategories,
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const memberOfThisGroup = (): boolean => {
      return user !== null ? memberIds.includes(user.id) : false;
    };

    const getMemberId = (): number | undefined => {
      if (user !== null && memberIds.includes(user.id)) {
        const member = group.members.find((a) => a.user_id === user.id);
        return member !== undefined ? member.id : undefined;
      }
      return undefined;
    };

    return group !== null ? (
      <div className="w-full">
        <XLargeTitle text_ga={group.name_ga} text_en={group.name_en} />

        <MarginTopContainer>
          <div className="md:flex md:flex-row">
            <div className="md:w-1/2  flex justify-center">
              <GroupImageLarge
                url={group.image !== null ? group.image : ""} // Replace with the path to your image
              />
            </div>
            <div className="md:w-1/2 ">
              <SmallPaddingContainer>
                <div className="flex">
                  <div className="p-1">
                    <LocationIcon />
                  </div>
                  <SmallCapitalisedTitle
                    text_ga={
                      group.location !== null ? group.location.name_ga : ""
                    }
                    text_en={
                      group.location !== null ? group.location.name_en : ""
                    }
                  />
                </div>
              </SmallPaddingContainer>
            </div>
          </div>
        </MarginTopContainer>
        <MarginTopContainer>
          <ContentSection>
            <LargeTitle text_ga="Foai" text_en="About" centered={true} />
            <SmallText
              text_ga={group.description_ga}
              text_en={group.description_en}
            />
          </ContentSection>
        </MarginTopContainer>
        {/* <MarginTopContainer>
          <ContentSection>
            <LargeTitle text_ga="Baill" text_en="Members" centered={true} />
            <div className="margin-y-large">
              <Profiles userIds={memberIds} />
            </div>
            <SmallMarginTopContainer>
              {user !== null ? (
                memberOfThisGroup() ? (
                  <form action={leaveGroup}>
                    <input type="hidden" name="groupURL" value={group.URL} />
                    <input
                      type="hidden"
                      name="memberId"
                      value={getMemberId()}
                    />
                    <div className="flex flex-col gap-2 items-center">
                      <SmallText
                        text_ga="Is ball thú"
                        text_en="You are a member"
                        centered={true}
                      />
                      <WarningButton text_ga="Fág" text_en="Leave" />
                    </div>
                  </form>
                ) : (
                  <form action={joinGroup}>
                    <input type="hidden" name="groupId" value={group.id} />
                    <input type="hidden" name="groupURL" value={group.URL} />
                    <input type="hidden" name="userId" value={user.id} />
                    <div className="flex flex-col gap-2 items-center">
                      <SmallText
                        text_ga="Ní ball thú"
                        text_en="You are not a member"
                        centered={true}
                      />
                      <SecondaryButton text_ga="Cláraigh" text_en="Join" />
                    </div>
                  </form>
                )
              ) : (
                <SecondaryButton text_ga="Join" text_en="Join" />
              )}
            </SmallMarginTopContainer>
          </ContentSection>
        </MarginTopContainer> */}
        <MarginTopContainer>
          <ContentSection>
            <LargeTitle text_ga="Imeachtaí" text_en="Events" centered={true} />
            <div className="w-full">
              {group.events.map((event: any, index: number) => (
                <MarginTopContainer key={index}>
                  <Link href={`/imeachtai/${event.id}`}>
                    <EventCardSmall
                      name_ga={event.name_ga}
                      name_en={event.name_en}
                      group_name_ga={group.name_ga}
                      group_name_en={group.name_en}
                      start_date={event.start_date}
                      start_time={event.start_time}
                      image={event.image}
                    />
                  </Link>
                </MarginTopContainer>
              ))}
            </div>
          </ContentSection>
        </MarginTopContainer>
        <MarginTopContainer>
          <ContentSection>
            <LargeTitle
              text_ga="Foclóir"
              text_en="Dictionary"
              centered={true}
            />
            <MarginTopContainer>
              <Phrases phrases={phrases !== null ? phrases : []} />
            </MarginTopContainer>
            <MarginTopContainer>
              <div className="w-full flex justify-center">
                <Link href={`/focloir?categories=[${groupCategories}]`}>
                  <SecondaryButton text_ga="Féach gach rud" text_en="See all" />
                </Link>
              </div>
            </MarginTopContainer>
          </ContentSection>
        </MarginTopContainer>
      </div>
    ) : null;
  }
}
