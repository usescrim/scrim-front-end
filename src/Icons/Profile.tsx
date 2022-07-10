import React from "react";

type IconTypes = {
  color?: string;
};

const Profile = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-primary">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M10.1331 9.05841C10.0498 9.05008 9.9498 9.05008 9.85814 9.05841C7.8748 8.99175 6.2998 7.36675 6.2998 5.36675C6.2998 3.32508 7.9498 1.66675 9.9998 1.66675C12.0415 1.66675 13.6998 3.32508 13.6998 5.36675C13.6915 7.36675 12.1165 8.99175 10.1331 9.05841Z"
        stroke="#4F5255"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.9666 12.1333C3.94993 13.4833 3.94993 15.6833 5.9666 17.0249C8.25827 18.5583 12.0166 18.5583 14.3083 17.0249C16.3249 15.6749 16.3249 13.4749 14.3083 12.1333C12.0249 10.6083 8.2666 10.6083 5.9666 12.1333Z"
        stroke="#4F5255"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
export default Profile;
