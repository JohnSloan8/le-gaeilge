import { SmallTitle, DateAndTime, SmallText, GroupImage } from "@/components";

interface EventCardSmallProps {
  name_ga: string;
  name_en: string;
  group_name_ga?: string;
  group_name_en?: string;
  start_date: string;
  start_time: string;
  end: string;
  image: string;
}

export default async function EventCardSmall({
  name_ga,
  name_en,
  group_name_ga = undefined,
  group_name_en = undefined,
  start_date,
  start_time,
  image,
}: EventCardSmallProps) {
  return (
    <div className="w-full flex flex-row">
      <div className="flex-grow">
        <div className="mb-2 mr-2">
          {group_name_ga && (
            <SmallText text_ga={group_name_ga} text_en={group_name_en} />
          )}

          <SmallTitle text_ga={name_ga} text_en={name_en} />
          <DateAndTime start_date={start_date} start_time={start_time} />
        </div>
      </div>
      {image && <GroupImage url={image} />}
    </div>
  );
}
