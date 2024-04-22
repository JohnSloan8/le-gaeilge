import { XLargeText, MainTitleContainer } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import EventsClient from "./clientComponents/EventsClient";

interface Props {
  searchParams: { groupURL: string };
}

export default async function EventsPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: events } = await supabase
    .from("events")
    .select("*, location:locations(*), group:groups(*), attendees(*)")
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  return (
    <div className="w-full flex flex-col items-center">
      <MainTitleContainer>
        <XLargeText text_ga="Imeachtaí" text_en="Events" />
      </MainTitleContainer>

      <div className="justify-center flex flex-wrap gap-4">
        {events === null ? (
          <h1>No Events</h1>
        ) : (
          <EventsClient events={events} groupURL={searchParams.groupURL} />
        )}
      </div>
    </div>
  );
}
