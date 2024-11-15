import type { IconModel } from "@/types/models";

const PlayIcon = ({ color, size, filled = false }: IconModel) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 55.127 61.182"
    >
      <g id="Group_38215" data-name="Group 38215" transform="translate(30 35)">
        <g
          id="play-button-arrowhead_1_"
          data-name="play-button-arrowhead (1)"
          transform="translate(-30 -35)"
          fill={filled ? color : "none"}
        >
          <path
            id="Path_18"
            data-name="Path 18"
            d="M18.095,1.349C12.579-1.815,8.107.777,8.107,7.134v46.91c0,6.363,4.472,8.952,9.988,5.791l41-23.514c5.518-3.165,5.518-8.293,0-11.457Z"
            transform="translate(-8.107 0)"
          />
        </g>
      </g>
    </svg>
  );
};

export default PlayIcon;
