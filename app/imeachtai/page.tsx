import { XLargeTitle, SmallPaddingContainer } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import dayjs from "dayjs";
import EventsClient from "./EventsClient";

export default async function EventsPage() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const todaysDate = dayjs().format("YYYY-MM-DD");
  const { data: events } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), attendees(*)")
    .gte("start_date", todaysDate)
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  return (
    <div className="w-full flex flex-col items-center">
      <SmallPaddingContainer>
        <XLargeTitle text_ga="Imeachtaí" text_en="Events" />
      </SmallPaddingContainer>

      <div className="justify-center flex flex-wrap gap-4">
        <EventsClient eventsServer={events} />
      </div>
    </div>
  );
}

//   {index === 0 && (
//     <div className="mt-2 md:mt-5">
//       <EventDate start_date={event.start_date} line={true} />
//     </div>
//   )}
//   {index !== 0 && event.start_date !== events[index - 1].start_date && (
//     <div className="mt-2 md:mt-5">
//       <EventDate start_date={event.start_date} line={true} />
//     </div>
//   )}
