"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface EventProps {
  eventID: number;
}

export default function Event({ eventID }: EventProps) {
  const [event, setEvent] = useState<any | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getEvent = async () => {
      const { data: events } = await supabase
        .from("events")
        .select("*, profiles (*)")
        .match({ id: eventID })
        .single();
      setEvent(events);
    };
    getEvent();
  }, []);

  return <pre>{JSON.stringify(event, null, 2)}</pre>;
}
