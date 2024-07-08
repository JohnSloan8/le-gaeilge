import dayjs from "dayjs";
import { monthsOfYear, daysOfWeek } from "@/utils";

interface DateAndTimeProps {
  start_date: string;
  start_time: string;
}

export default function DateAndTime({
  start_date,
  start_time,
}: DateAndTimeProps) {
  const dayJsObject = dayjs(start_date + start_time);
  const startTime = dayJsObject.format("hh:mm A");
  const startDayMonth_en = dayJsObject.format("ddd, MMM");
  const startDate = dayJsObject.format("DD");
  const startYear = dayJsObject.format("YYYY");
  const day_ga = daysOfWeek.ga[Number(dayJsObject.format("d"))].slice(3, 6);
  const month_ga = monthsOfYear.ga[Number(dayJsObject.format("M")) - 1].slice(
    0,
    3,
  );

  const displayDate_en = `${startDayMonth_en} ${startDate}`;
  const displayDate_ga = `${day_ga}, ${month_ga} ${startDate}, ${startYear}, ${startTime}`;

  return (
    <div className="">
      <div className="text-sm md:text-base text-primary-main">
        {displayDate_ga.toUpperCase()}
      </div>
      <div className="english-text">{` ${displayDate_en.toUpperCase()}`}</div>
    </div>
  );
}
