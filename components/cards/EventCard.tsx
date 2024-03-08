import {
  LargeTitle,
  SmallCapitalisedTitle,
  DateAndTime,
  SmallGrayText,
  GroupImage,
} from "@/components";

interface EventCardProps {
  name_ga: string;
  name_en: string;
  group_name_ga: string;
  group_name_en: string;
  location_ga: string;
  location_en: string;
  start_date: string;
  start_time: string;
  image: string;
  attendees: any[];
}

export default async function EventCard({
  name_ga,
  name_en,
  group_name_ga,
  group_name_en,
  location_ga,
  location_en,
  start_date,
  start_time,
  image,
  attendees,
}: EventCardProps) {
  return (
    <div className="w-full flex flex-row p-1 md:p-3 bg-white rounded-md bg-white border-2 border-green-300 hover:border-green-300 hover:bg-green-50">
      <div className="flex-grow">
        <div className="mb-2 mr-2">
          <DateAndTime start_date={start_date} start_time={start_time} />
          <LargeTitle text_ga={name_ga} text_en={name_en} />
          <SmallCapitalisedTitle text_ga={location_ga} text_en={location_en} />
          <SmallGrayText text_ga={group_name_ga} text_en={group_name_en} />
          <SmallGrayText
            text_ga={attendees.length + " attendees"}
            text_en="attendees"
          />
        </div>
      </div>
      {typeof image === "string" && <GroupImage url={image} />}
    </div>
  );
}
