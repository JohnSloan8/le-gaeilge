import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { MarginTopContainer, XLargeTitle } from "@/components";
import FocloirClientController from "./clientComponents/FocloirClientController";
import { getTranslation } from "@/app/actions";

interface Props {
  searchParams: { categories: string };
}

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: allPhrases } = await supabase.from("phrases").select();

  return (
    <div className="w-full">
      <XLargeTitle text_ga="Foclóir" text_en="Dictionary" />
      {allPhrases !== null && (
        <MarginTopContainer>
          <FocloirClientController
            userId={user !== null ? user.id : undefined}
            phrases={allPhrases}
            getTranslation={getTranslation}
          />
        </MarginTopContainer>
      )}
    </div>
  );
}
