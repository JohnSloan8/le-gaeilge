import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  MainTitleContainer,
  MarginTopContainer,
  XLargeTitle,
} from "@/components";
import FocloirClientController from "./clientComponents/FocloirClientController";
import { getTranslation } from "@/app/actions";
import type { PhraseModel, GroupModel } from "@/types/models";

interface Props {
  searchParams: { group: string };
}

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let phrases: any = [];
  let groups: any = [];

  if (searchParams.group !== undefined) {
    const { data: groupPhrases } = await supabase
      .from("phrases")
      .select("*, group:groups(*)")
      .eq("group.URL", searchParams.group);
    phrases = groupPhrases !== undefined && groupPhrases;
  } else {
    const { data: allPhrases } = await supabase
      .from("phrases")
      .select("*, group:groups(*)");
    phrases = allPhrases !== undefined && allPhrases;
  }

  return (
    <div className="w-full">
      <MainTitleContainer color="bg-cyan-100">
        <XLargeTitle text_ga="Foclóir" text_en="Dictionary" />
      </MainTitleContainer>
      <MarginTopContainer>
        <FocloirClientController
          userId={user !== null ? user.id : undefined}
          phrases={phrases}
          getTranslation={getTranslation}
        />
      </MarginTopContainer>
    </div>
  );
}
