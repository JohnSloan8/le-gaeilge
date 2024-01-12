"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface GroupProps {
  id: number;
}

export default function Group({ id }: GroupProps) {
  const [group, setGroup] = useState<any | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getGroup = async () => {
      const { data: group } = await supabase
        .from("groups")
        .select("*, profiles (*)")
        .match({ id: id })
        .single();
      setGroup(group);
    };
    getGroup();
  }, []);

  return <pre>{JSON.stringify(group, null, 2)}</pre>;
}
