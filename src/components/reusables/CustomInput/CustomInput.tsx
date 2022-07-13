import React from "react";

import { BsArrowCounterclockwise } from "react-icons/bs";

type CustomInputProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  fullWidth?: boolean;
  type?: "password" | "number" | "text";
};

const CustomInput = ({
  onChange,
  value,
  placeholder,
  fullWidth = false,
  type = "text",
}: CustomInputProps) => {
  return (
    <div
      className={`flex items-center w-full border-2 border-primary bg-primary overflow-hidden font-semibold focus-within:outline-none h-14 rounded-3xl text-primary  placeholder-primary placeholder-opacity-50 ${
        fullWidth ? "md:w-full" : "md:w-80"
      } `}
    >
      <div className="bg-primary text-white h-full flex items-center justify-center space-x-2 w-20 text-xl">
        <span className="-mt-1 cursor-pointer">$</span>
        <span className="cursor-pointer">
          <BsArrowCounterclockwise />
        </span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={` font-semibold focus-within:outline-none p-2 h-full text-primary  placeholder-primary placeholder-opacity-50 w-full`}
      />
    </div>
  );
};

export default CustomInput;
