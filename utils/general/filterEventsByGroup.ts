import type { ExtendedEventModel } from "@/types/models";

const filterEventsByGroup = (
  events: ExtendedEventModel[] | null,
  filter: string,
) => {
  if (events === null) return null;
  if (filter === "all") return events;

  return events?.filter(
    (event) => event.group !== null && event.group.URL === filter,
  );
};

export default filterEventsByGroup;
