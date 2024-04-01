import { XLargeTitle, MainTitleContainer } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import EventsClient from "./EventsClient";

export default async function EventsPage() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  // const todaysDate = dayjs().format("YYYY-MM-DD");
  const { data: events } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), attendees(*)")
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  return (
    <div className="w-full flex flex-col items-center">
      <MainTitleContainer>
        <XLargeTitle text_ga="Imeachtaí" text_en="Events" />
      </MainTitleContainer>

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
