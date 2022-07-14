import React from "react";

type colorType = {};

type TextFieldProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  fullWidth?: boolean;
  type?: "password" | "number" | "text" | "email";
  className?: string;
  label?: string;
  parent?: string;
  variant?:
    | "input-primary"
    | "input-secondary"
    | "input-error"
    | "input-success"
    | "input-black";
};

const TextField = ({
  onChange,
  value,
  placeholder,
  fullWidth = false,
  type = "text",
  className,
  label,
  parent,
  variant = "input-black",
}: TextFieldProps) => {
  return (
    <div className={`flex flex-col w-full  ${parent}`}>
      {label && (
        <span className="self-start text-gray my-2 mx-0 text-md md:ml-3">
          {label}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`border-2  font-semibold focus-within:outline-none p-2 px-5 h-14 rounded-3xl placeholder-opacity-50 ${
          fullWidth ? "w-full" : "w-64"
        } ${variant} ${className} `}
      />
    </div>
  );
};

export default TextField;
