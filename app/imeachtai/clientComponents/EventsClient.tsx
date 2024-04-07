"use client";

import Events from "../Events";
import FilterDate from "./FilterDate";
import FilterGroup from "./FilterGroup";
import type { ExtendedEventModel } from "@/types/models";
import getUniqueGroups from "@/utils/general/getUniqueGroups";
import { useEffect, useState } from "react";
import filterEventsByDate from "../../../utils/general/filterEventsByDate";
import filterEventsByGroup from "@/utils/general/filterEventsByGroup";

interface EventsClientProps {
  events: ExtendedEventModel[];
  groupURL?: string;
}

export default function EventsClient({ events, groupURL }: EventsClientProps) {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [dateFilter, setDateFilter] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");

  console.log("groupURL:", groupURL);

  const groups = events.map((event) => event.group);

  const uniqueGroups = getUniqueGroups(groups);

  const filterEvents = () => {
    const dateFilteredEvents = filterEventsByDate(events, dateFilter);
    const groupFilteredEvents = filterEventsByGroup(
      dateFilteredEvents,
      groupFilter,
    );

    groupFilteredEvents !== null
      ? setFilteredEvents(groupFilteredEvents)
      : setFilteredEvents([]);
  };

  useEffect(() => {
    if (events !== null) {
      filterEvents();
    }
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
