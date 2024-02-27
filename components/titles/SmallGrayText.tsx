interface SmallGreyTextProps {
  text_ga: string;
  text_en: string;
}

export default async function SmallGreyText({
  text_ga,
  text_en,
}: SmallGreyTextProps) {
  return (
    <div>
      <div className="inline text-sm md:text-base text-medium">{text_ga}</div>
      <div className="inline english-text">{"  " + text_en}</div>
    </div>
  );
}
