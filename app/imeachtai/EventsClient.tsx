"use client";

import Events from "./Events";
import FilterDate from "./FilterDate";
import FilterGroup from "./FilterGroup";
import type { ExtendedEventModel, GroupModel } from "@/types/models";
import getUniqueGroups from "@/utils/general/getUniqueGroups";
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
  const groupsNotNull: GroupModel[] = [];

  let uniqueGroups: GroupModel[] = [];
  if (groups !== undefined) {
    groups.forEach((group) => {
      if (group !== null) {
        groupsNotNull.push(group);
      }
    });
    uniqueGroups = getUniqueGroups(groupsNotNull);
  }

  const now = dayjs();
  const today = now.startOf("day");
  const endOfWeek = dayjs().endOf("week").add(1, "day");
  const startOfWeek = dayjs().startOf("week").add(1, "day");
  const next30Days = today.add(30, "day");

  const filterEvents = () => {
    const dateFilteredEvents = eventsServer?.filter((event) => {
      const dayJsObject = dayjs(event.start_date + event.start_time);

      switch (dateFilter) {
        case "past":
          return dayJsObject <= today;
        case "today":
          return isSameDay(today, dayJsObject);
        case "this week":
          return dayJsObject >= startOfWeek && dayJsObject <= endOfWeek;
        case "next 30 days":
          return dayJsObject >= today && dayJsObject <= next30Days;
        case "all upcoming":
          return dayJsObject >= today && dayJsObject <= next30Days;
        default:
          return true;
      }
    });

    let groupFilteredEvents = dateFilteredEvents;
    if (groupFilter !== "all") {
      groupFilteredEvents = dateFilteredEvents?.filter(
        (event) => event.group !== null && event.group.name_ga === groupFilter,
      );
    }
    groupFilteredEvents !== undefined
      ? setFilteredEvents(groupFilteredEvents)
      : setFilteredEvents([]);
  };

  useEffect(() => {
    filterEvents();
  }, [dateFilter, groupFilter]);

  return (
    <div>
      <div className="w-[100vw] bg-teal-500 flex justify-center">
        <div className="max-w-6xl w-full p-2 pt-3 flex md:flex-row flex-col items-center">
          <div className="md:pl-2 w-fit">
            <FilterDate dateFilter={dateFilter} setDateFilter={setDateFilter} />
          </div>
          <div className="md:pl-8 w-fit">
            <FilterGroup
              groups={uniqueGroups}
              groupFilter={groupFilter}
              setGroupFilter={setGroupFilter}
            />
          </div>
        </div>
      </div>
      <div className="flex w-[100vw] justify-center">
        <div className="max-w-6xl w-full p-2">
          <Events events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}

function isSameDay(date1: dayjs.Dayjs, date2: dayjs.Dayjs) {
  return (
    date1.year() === date2.year() &&
    date1.month() === date2.month() &&
    date1.date() === date2.date()
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
