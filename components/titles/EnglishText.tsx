import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300"],
});

interface EnglishTextProps {
  text_en: string;
  inline?: boolean;
  dark?: boolean;
}

export default function EnglishText({
  text_en,
  inline = false,
  dark = false,
}: EnglishTextProps) {
  return (
    <div
      className={`text-sm ${dark ? "text-gray-100" : "text-gray-400"} ${!inline ? "mt-[-4px]" : "m-1"} ${robotoCondensed.className}`}
    >
      {text_en}
    </div>
  );
}
