"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface EventProps {
  groupID: number;
}

export default function Events({ groupID }: EventProps) {
  const [events, setEvents] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getEvents = async () => {
      const { data: events } = await supabase
        .from("events")
        .select()
        .eq("group_id", groupID);
      setEvents(events);
    };
    getEvents();
  }, []);

  return <pre>{JSON.stringify(events, null, 2)}</pre>;
}
