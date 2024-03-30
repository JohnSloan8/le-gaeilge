interface SmallCapitalisedTitleProps {
  text_ga: string;
  text_en: string;
}

export default function SmallCapitalisedTitle({
  text_ga,
  text_en,
}: SmallCapitalisedTitleProps) {
  return (
    <div>
      <div className="text-sm">{text_ga.toUpperCase()}</div>
      <div className="english-text">{"  " + text_en}</div>
    </div>
  );
}
