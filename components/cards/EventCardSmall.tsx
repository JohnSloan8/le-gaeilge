import { SmallTitle, DateAndTime, SmallText, GroupImage } from "@/components";

interface EventCardSmallProps {
  name_ga: string;
  name_en: string;
  group_name_ga: string;
  group_name_en: string;
  start_date: string;
  start_time: string;
  image: string;
}

export default function EventCardSmall({
  name_ga,
  name_en,
  group_name_ga,
  group_name_en,
  start_date,
  start_time,
  image,
}: EventCardSmallProps) {
  return (
    <div className="w-full flex flex-row p-2 md:p-2 rounded-md bg-white border-2 border-green-300 hover:border-green-300 hover:bg-green-50">
      <div className="flex-grow">
        <div className="mr-2">
          <SmallTitle text_ga={name_ga} text_en={name_en} />
          <SmallText text_ga={group_name_ga} text_en={group_name_en} />
          <DateAndTime start_date={start_date} start_time={start_time} />
        </div>
      </div>
      {typeof image === "string" && <GroupImage url={image} />}
    </div>
  );
}
