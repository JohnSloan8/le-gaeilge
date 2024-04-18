"use client";

import { PlayIcon } from "@/icons";
import { useRef } from "react";

interface PlayAudioButtonProps {
  src: string | null;
}

export default function PlayAudioButton({ src }: PlayAudioButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        void audioRef.current.play();
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  return (
    <div>
      <button className="p-2" onClick={playAudio}>
        <PlayIcon />
      </button>
      <audio src={src !== null ? src : ""} ref={audioRef} />
    </div>
  );
}
