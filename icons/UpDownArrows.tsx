interface UpDownArrowsIconProps {
  color: string;
  size: number;
}

export default function UpDownArrowsIcon({
  color,
  size,
}: UpDownArrowsIconProps) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      id="up-down-arrow"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <polyline
          id="primary"
          points="11 7 8 4 5 7"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polyline>
        <polyline
          id="primary-2"
          data-name="primary"
          points="13 17 16 20 19 17"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polyline>
        <path
          id="primary-3"
          data-name="primary"
          d="M8,20V4m8,0V20"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </g>
    </svg>
  );
}
