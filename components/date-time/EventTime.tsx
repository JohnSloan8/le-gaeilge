import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface EventTimeProps {
  start_date: string;
  start_time: string;
}

export default async function EventTime({
  start_date,
  start_time,
}: EventTimeProps) {
  console.log("start_date", start_date);
  console.log("start_time", start_time);
  const dayJsObject = dayjs(start_date + start_time);
  const displayTime = dayJsObject.format("hh:mm A");
  console.log("displayTime", displayTime);
  return (
    <div className="w-full">
      <div className="text-base md:text-lg inline">{displayTime}</div>
    </div>
  );
}
