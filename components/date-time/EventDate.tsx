import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import weekday from "dayjs/plugin/weekday";
import daysOfWeek from "@/utils/NLP/days-of-week";
import monthsOfYear from "@/utils/NLP/months-of-year";

dayjs.extend(isToday);
dayjs.extend(weekday);

interface EventDateProps {
  start_date: string;
  line?: boolean;
}

export default async function EventDate({
  start_date,
  line = false,
}: EventDateProps) {
  const eventDayJsObject = dayjs(start_date);
  const dayOfWeek_ga = daysOfWeek.ga[Number(eventDayJsObject.format("d"))];
  const dayOfWeek_en = daysOfWeek.en[Number(eventDayJsObject.format("d"))];
  const month_ga = monthsOfYear.ga[Number(eventDayJsObject.format("M")) - 1];
  const month_en = monthsOfYear.en[Number(eventDayJsObject.format("M")) - 1];

  const displayText_ga = eventDayJsObject.isToday()
    ? "Inniu"
    : `${dayOfWeek_ga}, ${eventDayJsObject.format("D")} ${month_ga}`;
  const displayText_en = eventDayJsObject.isToday()
    ? "Today"
    : `${dayOfWeek_en}, ${eventDayJsObject.format("D")} ${month_en}`;

  return (
    <div className="w-full">
      <div className="text-base md:text-lg">{displayText_ga}</div>
      <div className="english-text">{" " + displayText_en}</div>
      {line && <hr></hr>}
    </div>
  );
}
