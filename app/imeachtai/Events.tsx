import Link from "next/link";
import { EventCard, SmallTopPaddingContainer } from "@/components";
import type { ExtendedEventModel } from "@/types/models";

interface EventsProps {
  events: ExtendedEventModel[] | null;
}

export default function Events({ events }: EventsProps) {
  return (
    <div className="justify-center flex flex-wrap gap-4">
      {events?.map((event, index) => (
        <div key={index} className="">
          <Link href={`/imeachtai/${event.id}`}>
            <SmallTopPaddingContainer>
              <EventCard
                name_ga={event.name_ga}
                name_en={event.name_en}
                group_name_ga={event.group !== null ? event.group.name_ga : ""}
                group_name_en={event.group !== null ? event.group.name_en : ""}
                start_date={event.start_date}
                start_time={event.start_time}
                location_ga={
                  event.location !== null ? event.location.name_ga : ""
                }
                location_en={
                  event.location !== null ? event.location.name_en : ""
                }
                image={event.image !== null ? event.image : ""}
                // attendees={event.attendees}
              />
            </SmallTopPaddingContainer>
          </Link>
        </div>
      ))}
    </div>
  );
}

//   {index === 0 && (
//     <div className="mt-2 md:mt-5">
//       <EventDate start_date={event.start_date} line={true} />
//     </div>
//   )}
//   {index !== 0 && event.start_date !== events[index - 1].start_date && (
//     <div className="mt-2 md:mt-5">
//       <EventDate start_date={event.start_date} line={true} />
//     </div>
//   )}
