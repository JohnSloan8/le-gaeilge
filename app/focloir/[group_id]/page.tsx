import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { MarginTopContainer, XLargeTitle } from "@/components";
import FocloirClientController from "../clientComponents/FocloirClientController";
import { getTranslation } from "@/app/actions";

export default async function Page({
  params,
}: {
  params: { group_id: number };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("params.id:", params.group_id);

  const { data: phrases } = await supabase
    .from("phrases")
    .select()
    .eq("group_id", params.group_id);

  return (
    <div className="w-full">
      <XLargeTitle text_ga="Foclóir" text_en="Dictionary" />

      {phrases !== null && (
        <MarginTopContainer>
          <FocloirClientController
            userId={user !== null ? user.id : undefined}
            phrases={phrases}
            groupId={params.group_id}
            getTranslation={getTranslation}
          />
        </MarginTopContainer>
      )}
    </div>
  );
}
