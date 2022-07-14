import React from "react";

type IconTypes = {
  color?: string;
};

const Arrow = ({ color = "#7000FF" }: IconTypes) => (
  <span className="text-primary">
    <svg
      width="52"
      height="8"
      viewBox="0 0 52 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={color}
        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM51.3536 4.35356C51.5488 4.1583 51.5488 3.84171 51.3536 3.64645L48.1716 0.46447C47.9763 0.269208 47.6597 0.269208 47.4645 0.46447C47.2692 0.659732 47.2692 0.976315 47.4645 1.17158L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34028 47.4645 7.53554C47.6597 7.7308 47.9763 7.7308 48.1716 7.53554L51.3536 4.35356ZM1 4.5L51 4.5L51 3.5L1 3.5L1 4.5Z"
        fill={color}
      />
    </svg>
  </span>
);
export default Arrow;
