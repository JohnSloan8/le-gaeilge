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
} from "@/components";
import { CalendarIcon, ClockIcon, LocationIcon } from "@/icons";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);
  const { data: event } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), attendees:profiles(*)")
    .eq("id", params.id)
    .single();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile_id: any;
  if (user) {
    const u_id = user.id;
    console.log("user_id", u_id);
    const { data: profile_id } = await supabase.rpc("getprofileidfromuserid", {
      u_id,
    });
    console.log("profile_id:", profile_id);
  }

  // console.log("attendees:", event.attendees);
  // console.log("user:", user);
  // console.log("event:", event);

  const attend = async () => {
    "use server";
    if (profile_id) {
      const e_id = event.id;
      const u_id = user!.id;
      await supabase.rpc("attendevent", {
        e_id,
        u_id,
      });
    }
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
        <div className="flex items-center w-full h-12">
          {user ? (
            <form action={attend}>
              <PrimaryButton text_ga="Attend" text_en="Attend" />
              {/* <button> attend</button> */}
            </form>
          ) : (
            <Link href="/login">
              <PrimaryButton text_ga="Attend" text_en="Attend" />
            </Link>
          )}
        </div>
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
          {event.attendees?.map((profile: any, index: number) => (
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
