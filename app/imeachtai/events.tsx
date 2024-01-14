import Link from "next/link";
import { EventCard } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Events() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const { data: events } = await supabase
    .from("events")
    .select("*, locations(*)");

  return (
    <div className="w-full p-2 flex flex-col items-center">
      <div className="p-4 flex flex-col items-center">
        <div className="text-4xl font-bold">Grupaí</div>
        <div className="text-sm font-light text-english">events</div>
      </div>
      <div className="max-w-2xl">
        {events?.map((event, index) => (
          <Link key={index} href={`/imeachtai/${event.id}`}>
            <div className="m-1 md:m-3 elevated-2 shadow-md hover:bg-background-100">
              <EventCard
                name_ga={event.name_ga}
                name_en={event.name_en}
                start={event.start}
                end={event.end}
                location_ga={event.locations.name_ga}
                location_en={event.locations.name_en}
                description_ga={event.description_ga}
                description_en={event.description_en}
                image={event.image}
                // attendees={attendees?.filter((m) => m.event_id == event.id).length}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
