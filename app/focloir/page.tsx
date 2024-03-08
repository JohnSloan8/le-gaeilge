import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { MarginTopContainer, XLargeTitle } from "@/components";
import type { PhraseModel } from "@/types/models";
import FocloirClientController from "./clientComponents/controller";
// app/posts/page.ts
interface Props {
  searchParams: { categories: string };
}

export default async function PhrasesPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const categories =
    searchParams.categories === undefined
      ? []
      : JSON.parse(searchParams.categories);

  let phrases: PhraseModel[] = [];
  if (categories.length > 0) {
    const { data: category_phrases } = await supabase.rpc(
      "get_categories_phrases",
      {
        categories_input: categories,
      },
    );
    if (category_phrases !== null) {
      phrases = category_phrases;
    }
  } else {
    const { data: all_phrases } = await supabase.from("phrases").select();
    if (all_phrases !== null) {
      phrases = all_phrases;
    }
  }
  return (
    <div className="w-full">
      <XLargeTitle text_ga="Foclóir" text_en="Dictionary" />

      <MarginTopContainer>
        <FocloirClientController phrases={phrases} />
      </MarginTopContainer>
    </div>
  );
}
