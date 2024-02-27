interface SmallCapitalisedTitleProps {
  text_ga: string;
  text_en: string;
}

export default async function SmallCapitalisedTitle({
  text_ga,
  text_en,
}: SmallCapitalisedTitleProps) {
  return (
    <div>
      <div className="inline text-sm md:text-base">{text_ga.toUpperCase()}</div>
      <div className="inline english-text">{"  " + text_en}</div>
    </div>
  );
}
