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
  CardLink,
  ProfileCard,
  PrimaryButton,
  SecondaryButton,
  WarningButton,
} from "@/components";
import { CalendarIcon, ClockIcon, LocationIcon } from "@/icons";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { revalidatePath } from 'next/cache'

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: event } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), profiles:profiles(*)")
    .eq("id", params.id)
    .single();
  
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userId = user ? user.id : null;
  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("user_id", userId)
    .single();
   
  const attendingThisEvent = () => {
      const attendeeIds = event.profiles.map((a: any) => a.id);
      return attendeeIds.includes(profile.id);
  };

  const { data: attendees } = await supabase
    .from("attendees")
    .select()
    .eq("event_id", event.id)
  const attendeeId = attendees && attendingThisEvent() ? attendees.find((a:any) => a.profile_id === profile.id).id : undefined

  const register = async (formData: FormData) => {
    "use server";
    const cookieStoreAction = cookies();
    const supabaseAction = createClient(cookieStoreAction);
    const profileId = formData.get("profileId");
    const eventId = formData.get("eventId");
    const userId = formData.get("userId");
    const { data, error } = await supabaseAction
      .from("attendees")
      .insert({ event_id: eventId, profile_id: profileId, user_id: userId })
      .select()
      .single();
    data && console.log("data:", data);
    error && console.log("error:", error);
    revalidatePath(`/imeachtai/${params.id}`)
  };

  const cancel = async (formData: FormData) => {
    "use server";
    const cookieStoreCancelAction = cookies();
    const supabaseCancelAction = createClient(cookieStoreCancelAction)
    const attendeeId = formData.get("attendeeId");
    const { data, error } = await supabaseCancelAction
      .from("attendees")
      .delete()
      .eq('id', attendeeId)
    data && console.log("data:", data);
    error && console.log("error:", error);
    revalidatePath(`/imeachtai/${params.id}`)
  };

  return event ? (
    <div className="w-full">
      <MarginTopContainer>
        <XLargeTitle
          text_ga={event.name_ga}
          text_en={event.name_en}
          centered={false}
        />
      </MarginTopContainer>
      <MarginTopContainer>
        {/* <div className="flex items-center w-full h-12"> */}
          {profile ? (
            attendingThisEvent() ? (
              <form action={cancel}>
                <input type="hidden" name="attendeeId" value={attendeeId} />
                <div className="border flex flex-row gap-4 items-center">
                  <SmallText
                    text_ga="tá tú ag freastal"
                    text_en="you are attending"
                  />
                  <WarningButton text_ga="Ceal" text_en="Cancel" />
                </div>
              </form>
            ) : (
              <form action={register}>
                <input type="hidden" name="profileId" value={profile.id} />
                <input type="hidden" name="eventId" value={event.id} />
                <input type="hidden" name="userId" value={user!.id} />
                <PrimaryButton text_ga="Attend" text_en="Attend" />
              </form>
            )
          ) : (
            <SecondaryButton text_ga="Attend" text_en="Attend" />
          )}
        {/* </div> */}
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
        <div className="flex flex-wrap w-full justify-center">
          {event.profiles?.map((profile: any, index: number) => (
            <div key={String(index)}>
              <CardLink href={`/proifili/${profile.id}`}>
                <ProfileCard name={profile.name} image={profile.image} />
              </CardLink>
            </div>
          ))}
        </div>
      </MarginTopContainer>
    </div>
  ) : null;
}
