import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300"],
});

interface EnglishTextProps {
  text_en: string | null;
  inline?: boolean;
  dark?: boolean;
  xsmall?: boolean;
}

export default function EnglishText({
  text_en,
  inline = false,
  dark = false,
  xsmall = false,
}: EnglishTextProps) {
  return (
    <div
      className={`${xsmall ? "text-xs" : "text-sm"} ${dark ? "text-gray-100" : "text-gray-400"}  ${robotoCondensed.className}`}
    >
      {text_en !== null ? text_en : ""}
    </div>
  );
}
