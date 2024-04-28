"use client";

import { PlayIcon, StopIcon } from "@/icons";
import { themeColors } from "@/theme";
import { useRef, useState } from "react";

interface PlayAudioButtonProps {
  src: string | null;
}

export default function PlayAudioButton({ src }: PlayAudioButtonProps) {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        void audioRef.current.play();
        setAudioPlaying(true);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  const stopAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioPlaying(false);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  return (
    <div>
      {audioPlaying ? (
        <button
          className="w-7 h-7 border flex justify-center items-center"
          onClick={stopAudio}
        >
          <StopIcon size={24} color={themeColors.primary[700]} />
        </button>
      ) : (
        <button
          className="w-7 h-7 border flex justify-center items-center"
          onClick={playAudio}
        >
          <PlayIcon size={24} color={themeColors.primary[700]} filled={true} />
        </button>
      )}
      <audio
        src={src !== null ? `data:audio/wav;base64,${src}` : ""}
        ref={audioRef}
        onEnded={stopAudio}
      />
    </div>
  );
}
