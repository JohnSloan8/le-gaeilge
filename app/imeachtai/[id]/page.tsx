import Image from "next/image";
import {
  LargeTitle,
  XLargeTitle,
  SmallPaddingContainer,
  MarginTopContainer,
  SmallCapitalisedTitle,
  EventDate,
  EventTime,
  SmallText,
  // CardLink,
  // ProfileCard,
  PrimaryButton,
  SecondaryButton,
  WarningButton,
  Profiles,
} from "@/components";
import { cancelRegistrationForEvent, registerForEvent } from "@/actions";
import { CalendarIcon, ClockIcon, LocationIcon } from "@/icons";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
// import { revalidatePath } from "next/cache";

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: event } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), attendees:attendees(*)")
    .eq("id", params.id)
    .single();

  const attendeeIds = event.attendees.map((a: any) => a.user_id);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const attendingThisEvent = (): boolean => {
    return user !== null ? attendeeIds.includes(user.id) : false;
  };

  return event !== null ? (
    <div className="w-full">
      <MarginTopContainer>
        <XLargeTitle
          text_ga={event.name_ga}
          text_en={event.name_en}
          centered={false}
        />
      </MarginTopContainer>
      <MarginTopContainer>
        {user !== null ? (
          attendingThisEvent() ? (
            <form action={cancelRegistrationForEvent}>
              <input type="hidden" name="eventId" value={event.id} />
              <input
                type="hidden"
                name="attendeeId"
                value={
                  event.attendees.find((a: any) => a.user_id === user.id).id
                }
              />
              <div className="flex flex-row gap-4 items-center">
                <SmallText
                  text_ga="Tá tú ag freastal"
                  text_en="You are attending"
                />
                <WarningButton text_ga="Ceal" text_en="Cancel" />
              </div>
            </form>
          ) : (
            <form action={registerForEvent}>
              <input type="hidden" name="eventId" value={event.id} />
              <input type="hidden" name="userId" value={user.id} />
              <PrimaryButton text_ga="Attend" text_en="Attend" />
            </form>
          )
        ) : (
          <SecondaryButton text_ga="Attend" text_en="Attend" />
        )}
      </MarginTopContainer>
      <MarginTopContainer>
        <div className="md:flex md:flex-row my-1 md:my-3">
          <div className="md:w-1/2">
            <Image
              src={event.image} // Replace with the path to your image
              alt={`image of ${event.name_en}`}
              height={10}
              width={10}
              layout="responsive"
            />
          </div>
          <div className="md:w-1/2 ">
            <SmallPaddingContainer>
              <div className="flex w-full">
                <div className="p-1">
                  <CalendarIcon />
                </div>
                <EventDate start_date={event.start_date} />
              </div>
              <div className="flex w-full">
                <div className="p-1">
                  <ClockIcon />
                </div>
                <EventTime
                  start_date={event.start_date}
                  start_time={event.start_time}
                />
              </div>
              <div className="flex">
                <div className="p-1">
                  <LocationIcon />
                </div>
                <SmallCapitalisedTitle
                  text_ga={event.location.name_ga}
                  text_en={event.location.name_en}
                />
              </div>
            </SmallPaddingContainer>
          </div>
        </div>
      </MarginTopContainer>
      <MarginTopContainer>
        <LargeTitle text_ga="Sonraí" text_en="Details" />
        <SmallText
          text_ga={event.description_ga}
          text_en={event.description_en}
        />
      </MarginTopContainer>
      <MarginTopContainer>
        <LargeTitle text_ga="Attendees" text_en="Attendees" />
        <MarginTopContainer>
          <Profiles userIds={attendeeIds} />
        </MarginTopContainer>
      </MarginTopContainer>
    </div>
  ) : null;
}
