import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import weekday from "dayjs/plugin/weekday";
import daysOfWeek from "@/utils/NLP/days-of-week";
import monthsOfYear from "@/utils/NLP/months-of-year";

dayjs.extend(isToday);
dayjs.extend(weekday);

interface EventDateLineProps {
  start_date: string;
}

export default async function EventDateLine({
  start_date,
}: EventDateLineProps) {
  console.log("start_date:", start_date);
  const eventDayJsObject = dayjs(start_date);
  const dayOfWeek_ga = daysOfWeek["ga"][Number(eventDayJsObject.format("d"))];
  const dayOfWeek_en = daysOfWeek["en"][Number(eventDayJsObject.format("d"))];
  const month_ga = monthsOfYear["ga"][Number(eventDayJsObject.format("M")) - 1];
  const month_en = monthsOfYear["en"][Number(eventDayJsObject.format("M")) - 1];

  const displayText_ga = eventDayJsObject.isToday()
    ? "Inniu"
    : `${dayOfWeek_ga}, ${eventDayJsObject.format("D")} ${month_ga}`;
  const displayText_en = eventDayJsObject.isToday()
    ? "Today"
    : `${dayOfWeek_en}, ${eventDayJsObject.format("D")} ${month_en}`;
  console.log("displayText:", displayText_en);
  return (
    <div className="w-full mt-1 md:mt-3">
      <div className="text-lg inline font-bold">{displayText_ga}</div>
      <div className="inline english-text">{" " + displayText_en}</div>
      <hr></hr>
    </div>
  );
}
