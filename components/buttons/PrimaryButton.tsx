interface PrimaryButtonProps {
  text_ga: string;
  text_en: string;
}

export default async function PrimaryButton({
  text_ga,
  text_en,
}: PrimaryButtonProps) {
  return (
    <button className="py-2 px-4 w-full md:max-w-[180px] bg-btn-background hover:bg-btn-background-hover rounded-md no-underline bg-btn-primary flex justify-center">
      <div className="text-white">{text_ga}</div>{" "}
      <div className="text-white">{text_en}</div>
    </button>
  );
}
