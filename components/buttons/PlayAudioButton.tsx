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
      <button className="p-1" onClick={playAudio}>
        <PlayIcon size={20} color="#0d91b2" />
      </button>
      <audio
        src={src !== null ? `data:audio/wav;base64,${src}` : ""}
        ref={audioRef}
      />
    </div>
  );
}
