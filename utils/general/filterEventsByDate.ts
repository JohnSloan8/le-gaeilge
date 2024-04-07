import dayjs from "dayjs";
import type { ExtendedEventModel } from "@/types/models";

function isSameDay(date1: dayjs.Dayjs, date2: dayjs.Dayjs) {
  return (
    date1.year() === date2.year() &&
    date1.month() === date2.month() &&
    date1.date() === date2.date()
  );
}

const filterEventsByDate = (
  events: ExtendedEventModel[] | null,
  filter: string,
) => {
  if (events === null) return null;

  const now = dayjs();
  const today = now.startOf("day");
  const endOfWeek = dayjs().endOf("week").add(1, "day");
  const startOfWeek = dayjs().startOf("week").add(1, "day");
  const next30Days = today.add(30, "day");

  return events.filter((event) => {
    const dayJsObject = dayjs(event.start_date + event.start_time);

    switch (filter) {
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
};

export default filterEventsByDate;
