import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import weekday from "dayjs/plugin/weekday";
import monthsOfYear from "@/utils/NLP/months-of-year";

dayjs.extend(isToday);
dayjs.extend(weekday);

interface EventDateProps {
  start_date: string;
  line?: boolean;
}

export default function EventDate({
  start_date,
  line = false,
}: EventDateProps) {
  const eventDayJsObject = dayjs(start_date);
  const month_ga =
    monthsOfYear.gaAbbr[Number(eventDayJsObject.format("M")) - 1];

  const displayText_ga = eventDayJsObject.isToday()
    ? "Inniu"
    : `${eventDayJsObject.format("D")} ${month_ga}`;

  return (
    <div className="">
      <div className="text-base">{displayText_ga}</div>
      {line && <hr></hr>}
    </div>
  );
}
