import React from "react";

type IconTypes = {
  color?: string;
};

const TrendsDown = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-success">
    <svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="30" rx="10" fill="#2FBF71" fill-opacity="0.1" />
      <g opacity="0.4">
        <path
          d="M19 16.6666L16.2 13.8666L15.1333 15.4666L13 13.3333"
          stroke="#2FBF71"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.667 16.6666H19.0003V15.3333"
          stroke="#2FBF71"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M13.9997 21.6668H17.9997C21.333 21.6668 22.6663 20.3335 22.6663 17.0002V13.0002C22.6663 9.66683 21.333 8.3335 17.9997 8.3335H13.9997C10.6663 8.3335 9.33301 9.66683 9.33301 13.0002V17.0002C9.33301 20.3335 10.6663 21.6668 13.9997 21.6668Z"
        stroke="#2FBF71"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
export default TrendsDown;
