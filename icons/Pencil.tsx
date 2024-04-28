interface PencilIconProps {
  color: string;
  size: number;
  filled?: boolean;
}

const PencilIcon = ({ color, size, filled = false }: PencilIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? color : "none"}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth="1.34"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4.48485 16.5L15.8242 5.25607C16.5395 4.54674 17.6798 4.5061 18.4438 5.16268V5.16268C19.2877 5.8879 19.3462 7.17421 18.5716 7.97301L7.39394 19.5L4 20L4.48485 16.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default PencilIcon;
