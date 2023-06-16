import React from "react";

export function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 70 70"
    >
      <g data-name="Group 1" transform="translate(-232 2)">
        <path
          className="square"
          fill="#440dec"
          d="M0 0H70V70H0z"
          data-name="Rectangle 1"
          transform="translate(232 -2)"
        ></path>
        <g
          data-name="Arrow / Chevron_Right_MD"
          transform="translate(254.517 20.035)"
        >
          <path
            className="arrow"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            d="M10 8l4.965 4.965L10 17.931"
          ></path>
        </g>
      </g>
    </svg>
  );
}
