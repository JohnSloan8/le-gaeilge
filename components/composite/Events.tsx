import Link from "next/link";
import { EventCardSmall, SmallMarginContainer } from "@/components";
import type { EventModel, GroupModel } from "@/types/models";

interface EventsProps {
  events: EventModel[] | null;
  groups: GroupModel[] | null;
}

export default async function events({ events, groups }: EventsProps) {
  return (
    <div className="w-full">
      {events !== null
        ? events.map((event: EventModel, index: number) => (
            <SmallMarginContainer key={String(index)}>
              <Link href={`/imeachtai/${event.id}`}>
                <EventCardSmall
                  name_ga={event.name_ga}
                  name_en={event.name_en}
                  group_name_ga={
                    groups !== null
                      ? groups.filter((g) => g.id === event.group_id)[0].name_ga
                      : ""
                  }
                  group_name_en={
                    groups !== null
                      ? groups.filter((g) => g.id === event.group_id)[0].name_en
                      : ""
                  }
                  start_date={event.start_date}
                  start_time={event.start_time}
                  image={event.image !== null ? event.image : ""}
                />
              </Link>
            </SmallMarginContainer>
          ))
        : null}
    </div>
  );
}
