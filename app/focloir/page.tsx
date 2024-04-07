import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  MainTitleContainer,
  MarginTopContainer,
  XLargeTitle,
} from "@/components";
import FocloirClient from "./clientComponents/FocloirClient";
import { getTranslation } from "@/app/actions";
import getUniqueGroups from "@/utils/general/getUniqueGroups";

interface Props {
  searchParams: { group: string };
}

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: phrases } = await supabase
    .from("phrases")
    .select("*, group:groups(*)")
    .order("created_at", { ascending: true });

  if (phrases === null) {
    return <h1>No Phrases</h1>;
  } else {
    const groups = phrases.map((phrase) => phrase.group);
    const uniqueGroups = getUniqueGroups(groups);

    let thisGroup;
    if (searchParams.group !== undefined) {
      thisGroup = uniqueGroups.find(
        (group) => group.URL === searchParams.group,
      );
    }

    return (
      <div className="w-full">
        <MainTitleContainer color="bg-cyan-100">
          <XLargeTitle text_ga="Foclóir" text_en="Dictionary" />
        </MainTitleContainer>

        <FocloirClient
          phrases={phrases}
          uniqueGroups={uniqueGroups}
          getTranslation={getTranslation}
          thisGroup={thisGroup === undefined ? null : thisGroup}
        />
      </div>
    );
  }
}
