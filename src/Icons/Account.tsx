import React from "react";

type IconTypes = {
  color?: string;
};

const Account = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-primary">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3337 10.8333V7.49996C18.3337 3.33329 16.667 1.66663 12.5003 1.66663H7.50033C3.33366 1.66663 1.66699 3.33329 1.66699 7.49996V12.5C1.66699 16.6666 3.33366 18.3333 7.50033 18.3333H11.667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.4">
        <path
          d="M9.125 5.83337L8.25 13.725"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7588 5.83337L10.8838 13.725"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.27441 8.4668H14.1661"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83301 11.1003H13.7247"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </span>
);
export default Account;
