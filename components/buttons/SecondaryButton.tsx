interface SecondaryButtonProps {
  text_ga: string;
  text_en: string;
}

export default async function SecondaryButton({
  text_ga,
  text_en,
}: SecondaryButtonProps) {
  return (
    <button className="relative button bg-blue-400 hover:bg-blue-500">
      <div className="text-white text-base md:text-lg">{text_ga}</div>{" "}
      <div className="absolute top-10 text-sm english-text">{text_en}</div>
    </button>
  );
}
