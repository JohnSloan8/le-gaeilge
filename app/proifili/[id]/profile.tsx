"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface ProfileProps {
  profileID: number;
}

export default function Profile({ profileID }: ProfileProps) {
  const [profile, setProfile] = useState<any | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getProfile = async () => {
      const { data: profiles } = await supabase
        .from("profiles")
        .select()
        .match({ id: profileID })
        .single();
      setProfile(profiles);
    };
    getProfile();
  }, []);

  return <pre>{JSON.stringify(profile, null, 2)}</pre>;
}
