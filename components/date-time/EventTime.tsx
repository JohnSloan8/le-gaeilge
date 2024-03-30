import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface EventTimeProps {
  start_date: string;
  start_time: string;
}

export default function EventTime({ start_date, start_time }: EventTimeProps) {
  const dayJsObject = dayjs(start_date + start_time);
  const displayTime = dayJsObject.format("hh:mm A");

  return (
    <div className="w-full">
      <div className="text-base md:text-lg">{displayTime}</div>
    </div>
  );
}
