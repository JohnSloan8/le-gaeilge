interface SecondaryButtonProps {
  text_ga: string;
  text_en: string;
}

export default async function SecondaryButton({
  text_ga,
  text_en,
}: SecondaryButtonProps) {
  return (
    <button className="button bg-blue-400 hover:bg-blue-500">
      <div className="text-white">{text_ga}</div>{" "}
      <div className="text-white">{text_en}</div>
    </button>
  );
}
