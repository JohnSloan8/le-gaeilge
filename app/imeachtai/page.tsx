import Link from "next/link";
import { EventCard, EventDateLine } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import dayjs from "dayjs";

export default async function Page() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const todaysDate = dayjs().format("YYYY-MM-DD");
  const { data: events } = await supabase
    .from("events")
    .select("*, locations(*), groups(*)")
    .gte("start_date", todaysDate)
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });
  const { data: attendees } = await supabase.from("attendees").select();
  console.log("events:", events);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="p-4 flex flex-col items-center">
        <div className="text-4xl font-bold">Imeachtaí</div>
        <div className="english-text">Events</div>
      </div>
      <div className="max-w-2xl">
        {events?.map((event, index) => (
          <div key={index}>
            {index === 0 && <EventDateLine start_date={event.start_date} />}
            {index !== 0 &&
              event.start_date !== events[index - 1].start_date && (
                <EventDateLine start_date={event.start_date} />
              )}
            <Link href={`/imeachtai/${event.id}`}>
              <div className="my-1 md:my-3">
                <EventCard
                  name_ga={event.name_ga}
                  name_en={event.name_en}
                  group_name_ga={event.groups.name_ga}
                  group_name_en={event.groups.name_en}
                  start_date={event.start_date}
                  start_time={event.start_time}
                  end={event.end}
                  location_ga={event.locations.name_ga}
                  location_en={event.locations.name_en}
                  image={event.image}
                  attendees={
                    attendees?.filter((a) => a.event_id == event.id).length
                  }
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
