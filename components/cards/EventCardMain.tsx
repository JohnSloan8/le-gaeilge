import {
  LargeTitle,
  SmallCapitalisedTitle,
  EventDate,
  SmallText,
  GroupImage,
} from "@/components";
import { CalendarIcon, LocationIcon, GroupIcon } from "@/icons";

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
  // attendees: any[];
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
  // attendees,
}: EventCardProps) {
  return (
    <div className="w-full flex flex-row p-2 md:p-3 rounded-md bg-white shadow-md hover:shadow-lg">
      <div className="flex-grow">
        <div className="mr-2">
          <LargeTitle text_ga={name_ga} text_en={name_en} />
          <div className="flex w-full items-center margin-y-x-small">
            <div className="pr-4">
              <GroupIcon />
            </div>
            <SmallText text_ga={group_name_ga} text_en={group_name_en} />
          </div>

          <div className="flex w-full items-center margin-y-x-small">
            <div className="pr-4">
              <CalendarIcon />
            </div>
            <EventDate start_date={start_date} />
          </div>
          <div className="flex w-full items-center margin-y-x-small">
            <div className="pr-4">
              <LocationIcon />
            </div>
            <SmallCapitalisedTitle
              text_ga={location_ga}
              text_en={location_en}
            />
          </div>
          {/* <SmallGrayText
            text_ga={attendees.length + " attendees"}
            text_en="attendees"
          /> */}
        </div>
      </div>
      {typeof image === "string" && <GroupImage url={image} />}
    </div>
  );
}
