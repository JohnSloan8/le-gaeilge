import Link from "next/link";
import {
  EventCard,
  EventDate,
  XLargeTitle,
  SmallPaddingContainer,
} from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import dayjs from "dayjs";

export default async function EventsPage() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const todaysDate = dayjs().format("YYYY-MM-DD");
  const { data: events } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), attendees:profiles(*)")
    .gte("start_date", todaysDate)
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  return (
    <div className="w-full flex flex-col items-center">
      <SmallPaddingContainer>
        <XLargeTitle text_ga="Imeachtaí" text_en="Events" />
      </SmallPaddingContainer>

      {events?.map((event, index) => (
        <div key={index} className="w-full">
          {index === 0 && (
            <div className="mt-2 md:mt-5">
              <EventDate start_date={event.start_date} />
            </div>
          )}
          {index !== 0 && event.start_date !== events[index - 1].start_date && (
            <div className="mt-2 md:mt-5">
              <EventDate start_date={event.start_date} line={true} />
            </div>
          )}

          <Link href={`/imeachtai/${event.id}`}>
            <SmallPaddingContainer>
              <EventCard
                name_ga={event.name_ga}
                name_en={event.name_en}
                group_name_ga={event.group.name_ga}
                group_name_en={event.group.name_en}
                start_date={event.start_date}
                start_time={event.start_time}
                end={event.end}
                location_ga={event.location.name_ga}
                location_en={event.location.name_en}
                image={event.image}
                attendees={event.attendees}
              />
            </SmallPaddingContainer>
          </Link>
        </div>
      ))}
    </div>
  );
}
