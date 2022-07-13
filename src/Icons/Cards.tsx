import React from "react";

type IconTypes = {
  color?: string;
};

const Cards = ({ color = "#4F5255" }: IconTypes) => (
  <span className="text-success">
    <svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="30" rx="10" fill="#F9F4FF" />
      <path
        d="M16.44 8.67868L16.42 8.72534L14.4866 13.212H12.5866C12.1333 13.212 11.7 13.3053 11.3066 13.472L12.4733 10.6853L12.5 10.6187L12.5466 10.512C12.56 10.472 12.5733 10.432 12.5933 10.3987C13.4666 8.37868 14.4533 7.91868 16.44 8.67868Z"
        stroke="#5105B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.033 13.3454C19.733 13.252 19.413 13.212 19.093 13.212H14.4863L16.4197 8.72538L16.4397 8.67871C16.5397 8.71204 16.633 8.75871 16.733 8.79871L18.2063 9.41871C19.0263 9.75871 19.5997 10.112 19.9463 10.5387C20.013 10.6187 20.0663 10.692 20.113 10.7787C20.173 10.872 20.2197 10.9654 20.2463 11.0654C20.273 11.1254 20.293 11.1854 20.3063 11.2387C20.4863 11.7987 20.3797 12.4854 20.033 13.3454Z"
        stroke="#5105B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3475 16.4655V17.7655C22.3475 17.8988 22.3408 18.0322 22.3342 18.1655C22.2075 20.4922 20.9075 21.6655 18.4408 21.6655H13.2408C13.0808 21.6655 12.9208 21.6522 12.7675 21.6322C10.6475 21.4922 9.51415 20.3588 9.37415 18.2388C9.35415 18.0855 9.34082 17.9255 9.34082 17.7655V16.4655C9.34082 15.1255 10.1542 13.9722 11.3142 13.4722C11.7142 13.3055 12.1408 13.2122 12.5942 13.2122H19.1008C19.4275 13.2122 19.7475 13.2588 20.0408 13.3455C21.3675 13.7522 22.3475 14.9922 22.3475 16.4655Z"
        stroke="#5105B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M12.473 10.6853L11.3063 13.472C10.1463 13.972 9.33301 15.1253 9.33301 16.4653V14.512C9.33301 12.6186 10.6797 11.0386 12.473 10.6853Z"
        stroke="#5105B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M22.3457 14.5119V16.4652C22.3457 14.9985 21.3724 13.7519 20.0391 13.3519C20.3857 12.4852 20.4857 11.8052 20.3191 11.2385C20.3057 11.1785 20.2857 11.1185 20.2591 11.0652C21.4991 11.7052 22.3457 13.0185 22.3457 14.5119Z"
        stroke="#5105B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
export default Cards;
