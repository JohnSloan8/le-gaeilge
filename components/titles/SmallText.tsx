interface SmallTextProps {
  text_ga: string;
  text_en: string;
}

export default async function SmallText({ text_ga, text_en }: SmallTextProps) {
  return (
    <div>
      <div className="text-sm md:text-base text-medium">{text_ga}</div>
      <div className="english-text">{"  " + text_en}</div>
    </div>
  );
}
