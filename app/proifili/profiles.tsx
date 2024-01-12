"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Profiles() {
  const [profiles, setProfiles] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getProfiles = async () => {
      const { data: profiles } = await supabase.from("profiles").select();
      setProfiles(profiles);
    };
    getProfiles();
  }, []);

  return <pre>{JSON.stringify(profiles, null, 2)}</pre>;
}
