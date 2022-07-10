import React from "react";

type IconTypes = {
  color?: string;
};

const Transfer = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-primary">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.16641 5.26667L13.2414 2.90834C16.4164 1.85001 18.1414 3.58334 17.0914 6.75834L14.7331 13.8333C13.1497 18.5917 10.5497 18.5917 8.96641 13.8333L8.26641 11.7333L6.16641 11.0333C1.40807 9.45001 1.40807 6.85834 6.16641 5.26667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.34"
        d="M8.4248 11.375L11.4081 8.3833"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
export default Transfer;
