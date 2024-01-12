import { createClient } from "@/utils/supabase/client";

import Events from "./events";
import Group from "./group";

interface PageProps {
  params?: { name: string };
}

export default async function Page({ params }: PageProps) {
  const supabase = createClient();
  const { data: group } = await supabase
    .from("groups")
    .select()
    .match({ URL: params!.name })
    .single();

  if (!group) {
    return <h1>no group</h1>;
  }

  return (
    <div>
      <Group id={group.id} />
      <Events groupID={group.id} />
    </div>
  );
}
