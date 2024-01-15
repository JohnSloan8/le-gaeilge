import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import weekday from "dayjs/plugin/weekday";
import daysOfWeek from "@/utils/NLP/days-of-week";
import monthsOfYear from "@/utils/NLP/months-of-year";

dayjs.extend(isToday);
dayjs.extend(weekday);

interface EventDateLineProps {
  start_date: string;
  start_time: string;
}

export default async function EventDateLine({
  start_date,
  start_time,
}: EventDateLineProps) {
  console.log("start_date:", start_date);
  const eventDayJsObject = dayjs(start_date);
  const dayOfWeek_ga = daysOfWeek["ga"][Number(eventDayJsObject.format("d"))];
  const dayOfWeek_en = daysOfWeek["en"][Number(eventDayJsObject.format("d"))];
  const month_ga = monthsOfYear["ga"][Number(eventDayJsObject.format("M")) - 1];
  const month_en = monthsOfYear["en"][Number(eventDayJsObject.format("M")) - 1];

  const displayText = eventDayJsObject.isToday()
    ? "Inniu"
    : `${dayOfWeek_ga}, ${eventDayJsObject.format("D")} ${month_ga}`;
  return <div className="text-lg">{displayText}</div>;
}
