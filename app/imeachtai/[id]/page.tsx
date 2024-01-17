import Link from "next/link";
import Image from "next/image";
import {
  LargeTitle,
  XLargeTitle,
  SmallPaddingContainer,
  SmallCapitalisedTitle,
  EventDate,
  EventTime,
  SmallText,
} from "@/components";
import { CalendarIcon, ClockIcon, LocationIcon } from "@/icons";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);
  const { data: event } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), attendees:profiles(*)")
    .eq("id", params.id)
    .single();

  console.log("event:", event);

  return event ? (
    <div className="w-full">
      <XLargeTitle
        text_ga={event.name_ga}
        text_en={event.name_en}
        centered={false}
      />

      <div className="md:flex md:flex-row my-1 md:my-3">
        <div className="md:w-1/2">
          <Image
            src={event.image} // Replace with the path to your image
            alt={`image of ${event.name_en}`}
            height={10}
            width={10}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="md:w-1/2 ">
          <SmallPaddingContainer>
            <div className="flex inline w-full">
              <div className="p-1">
                <CalendarIcon />
              </div>
              <EventDate start_date={event.start_date} />
            </div>
            <div className="flex inline w-full">
              <div className="p-1">
                <ClockIcon />
              </div>
              <EventTime
                start_date={event.start_date}
                start_time={event.start_time}
              />
            </div>
            <div className="flex inline">
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
      <LargeTitle text_ga="Sonraí" text_en="Details" />
      <SmallText
        text_ga={event.description_ga}
        text_en={event.description_en}
      />
    </div>
  ) : null;
}
