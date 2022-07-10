import React from "react";

type IconTypes = {
  color?: string;
};

const Logout = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-error">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.41699 6.30001C7.67533 3.30001 9.21699 2.07501 12.592 2.07501H12.7003C16.4253 2.07501 17.917 3.56668 17.917 7.29168V12.725C17.917 16.45 16.4253 17.9417 12.7003 17.9417H12.592C9.24199 17.9417 7.70033 16.7333 7.42533 13.7833"
        stroke="#BF1313"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.4">
        <path
          d="M12.499 10H3.01562"
          stroke="#BF1313"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.87467 7.20865L2.08301 10.0003L4.87467 12.792"
          stroke="#BF1313"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </span>
);
export default Logout;
