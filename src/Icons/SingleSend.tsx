import React from "react";

type IconTypes = {
  color?: string;
};

const SingleSend = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-primary">
    <svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="30" rx="10" fill="#EF2D56" fill-opacity="0.1" />
      <path
        opacity="0.4"
        d="M21.4173 13.9375V16.25C21.4173 18.2 18.9923 19.7812 16.0007 19.7812C13.009 19.7812 10.584 18.2 10.584 16.25V13.9375C10.584 15.8875 13.009 17.2812 16.0007 17.2812C18.9923 17.2812 21.4173 15.8875 21.4173 13.9375Z"
        stroke="#EF2D56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4173 14.0314C21.4173 14.6001 21.209 15.1251 20.8423 15.5751C19.9506 16.6751 18.1173 17.3751 16.0007 17.3751C13.884 17.3751 12.0507 16.6751 11.159 15.5751C10.7923 15.1251 10.584 14.6001 10.584 14.0314C10.584 13.0564 11.1923 12.1751 12.1673 11.5376C13.1506 10.8939 14.5007 10.5001 16.0007 10.5001C17.5007 10.5001 18.8507 10.8939 19.834 11.5314C20.809 12.1751 21.4173 13.0564 21.4173 14.0314Z"
        stroke="#EF2D56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
export default SingleSend;
