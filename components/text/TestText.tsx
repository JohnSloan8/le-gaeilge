interface TestTextProps {
  text_ga: string | null;
  text_en: string | null;
  showEn?: boolean;
  showGa?: boolean;
}

export default function TestText({
  text_ga,
  text_en,
  showEn = true,
  showGa = true,
}: TestTextProps) {
  return (
    <div className={`flex flex-col`}>
      <div className={`text-gray-500 py-2 text-base ${!showEn && "invisible"}`}>
        {text_en !== null ? text_en : ""}
      </div>
      <div className={`text-gray-900 pb-4 text-base ${!showGa && "invisible"}`}>
        {text_ga !== null ? text_ga : ""}
      </div>
    </div>
  );
}
