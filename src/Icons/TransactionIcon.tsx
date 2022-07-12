import React from "react";

type IconTypes = {
  color?: string;
};

const TransactionIcon = ({ color = "#4F5255" }: IconTypes) => (
  <span className="textWarning">
    <svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="30" rx="10" fill="#FCDC4D" fill-opacity="0.1" />
      <g opacity="0.4">
        <path
          d="M19 13.3333L16.2 16.1333L15.1333 14.5333L13 16.6666"
          stroke="#FCDC4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.667 13.3333H19.0003V14.6666"
          stroke="#FCDC4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M13.9997 21.6668H17.9997C21.333 21.6668 22.6663 20.3335 22.6663 17.0002V13.0002C22.6663 9.66683 21.333 8.3335 17.9997 8.3335H13.9997C10.6663 8.3335 9.33301 9.66683 9.33301 13.0002V17.0002C9.33301 20.3335 10.6663 21.6668 13.9997 21.6668Z"
        stroke="#FCDC4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
export default TransactionIcon;
