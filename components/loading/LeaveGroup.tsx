"use client";

import { useState } from "react";
import { SmallText } from "@/components";

interface LeaveGroupProps {
  text_ga: string;
  text_en: string;
}

export default async function LeaveGroup({
  text_ga,
  text_en,
}: LeaveGroupProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex flex-row gap-4 items-center">
      {clicked ? (
        <>
          <SmallText text_ga="Is ball thú" text_en="You are a member" />
          <button
            onClick={handleClick}
            className="button bg-red-400 hover:bg-red-500 w-full sm:w-[300px]"
          >
            <div className="inline text-white">{text_ga}</div>{" "}
            <div className="inline text-white">{text_en}</div>
          </button>
        </>
      ) : (
        <h4>leaving group</h4>
      )}
    </div>
  );
}
