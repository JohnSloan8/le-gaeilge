import type { IconModel } from "@/types/models";

export default function EventsIcon({ color, size }: IconModel) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24.00 24.00"
      fill={color}
    >
      <g id="SVGRepo_iconCarrier">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"></path>
      </g>
    </svg>
  );
}
