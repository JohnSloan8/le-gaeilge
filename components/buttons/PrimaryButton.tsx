interface PrimaryButtonProps {
  text_ga: string;
  text_en: string;
}

export default async function PrimaryButton({
  text_ga,
  text_en,
}: PrimaryButtonProps) {
  return (
    <button className="button bg-green-500 hover:bg-green-600 ring-green-300">
      <div className="text-white">{text_ga}</div>{" "}
      <div className="text-white">{text_en}</div>
    </button>
  );
}
