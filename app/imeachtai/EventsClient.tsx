"use client";

import Events from "./Events";
import FilterDate from "./FilterDate";
import FilterGroup from "./FilterGroup";
import type { ExtendedEventModel, GroupModel } from "@/types/models";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

interface EventsClientProps {
  eventsServer: ExtendedEventModel[] | null;
}

export default function EventsClient({ eventsServer }: EventsClientProps) {
  const [filteredEvents, setFilteredEvents] = useState(eventsServer);
  const [dateFilter, setDateFilter] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");

  const groups = eventsServer?.map((event) => event.group);
  const uniqueGroups: GroupModel[] = [];
  const uniqueGroupIds: number[] = [];

  groups?.forEach((group) => {
    if (group !== null && !uniqueGroupIds.includes(group.id)) {
      uniqueGroups.push(group);
      uniqueGroupIds.push(group.id);
    }
  });

  const now = dayjs();
  const endOfWeek = dayjs().endOf("week");
  const next30Days = now.add(30, "day");

  const filterEvents = () => {
    const dateFilteredEvents = eventsServer?.filter((event) => {
      const dayJsObject = dayjs(event.start_date + event.start_time);
      switch (dateFilter) {
        case "today":
          return now.isSame(dayJsObject);
        case "thisWeek":
          return dayJsObject >= now && dayJsObject <= endOfWeek;
        case "next30Days":
          return dayJsObject >= now && dayJsObject <= next30Days;
        default:
          return true;
      }
    });

    if (dateFilteredEvents !== undefined) {
      const groupFilteredEvents = dateFilteredEvents?.filter(
        (event) => event.group !== null && event.group.name_ga === groupFilter,
      );

      groupFilteredEvents !== undefined &&
        setFilteredEvents(groupFilteredEvents);
    }
  };

  useEffect(() => {
    filterEvents();
  }, [dateFilter, groupFilter]);

  return (
    <div>
      <FilterDate dateFilter={dateFilter} setDateFilter={setDateFilter} />
      <FilterGroup
        groups={uniqueGroups}
        groupFilter={groupFilter}
        setGroupFilter={setGroupFilter}
      />
      <Events events={filteredEvents} />
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
