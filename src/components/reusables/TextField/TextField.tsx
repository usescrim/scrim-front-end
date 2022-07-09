import React from "react";

type TextFieldProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  fullWidth?: boolean;
  type?: "password" | "number" | "text";
};

const TextField = ({
  onChange,
  value,
  placeholder,
  fullWidth = false,
  type = "text",
}: TextFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border-2 border-primary font-semibold focus-within:outline-none p-2 h-14 rounded-2xl text-primary  placeholder-primary placeholder-opacity-50 ${
        fullWidth ? "w-full" : "w-60"
      }`}
    />
  );
};

export default TextField;
