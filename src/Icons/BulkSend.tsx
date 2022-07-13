import React from "react";

type IconTypes = {
  color?: string;
};

const BulkSend = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-primary">
    <svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="30" rx="10" fill="#FCDC4D" fill-opacity="0.1" />
      <path
        opacity="0.4"
        d="M20.3337 15.4333V17.9C20.3337 19.98 18.3937 21.6667 16.0003 21.6667C13.607 21.6667 11.667 19.98 11.667 17.9V15.4333C11.667 17.5133 13.607 19 16.0003 19C18.3937 19 20.3337 17.5133 20.3337 15.4333Z"
        stroke="#FCDC4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3337 12.1C20.3337 12.7067 20.167 13.2667 19.8737 13.7467C19.1603 14.92 17.6937 15.6667 16.0003 15.6667C14.307 15.6667 12.8403 14.92 12.127 13.7467C11.8337 13.2667 11.667 12.7067 11.667 12.1C11.667 11.06 12.1537 10.12 12.9337 9.44004C13.7203 8.75337 14.8003 8.33337 16.0003 8.33337C17.2003 8.33337 18.2803 8.75338 19.067 9.43338C19.847 10.12 20.3337 11.06 20.3337 12.1Z"
        stroke="#FCDC4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3337 12.1V15.4334C20.3337 17.5134 18.3937 19 16.0003 19C13.607 19 11.667 17.5134 11.667 15.4334V12.1C11.667 10.02 13.607 8.33337 16.0003 8.33337C17.2003 8.33337 18.2803 8.75338 19.067 9.43338C19.847 10.12 20.3337 11.06 20.3337 12.1Z"
        stroke="#FCDC4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
export default BulkSend;
