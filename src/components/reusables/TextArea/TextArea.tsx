import React from "react";

type TextFieldProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  label?: string;
  rows?: number;
};

const TextArea = ({
  onChange,
  value,
  placeholder,
  fullWidth = false,
  rows = 4,
  className,
  label,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <span className="self-start text-gray my-2 mx-0 text-md md:ml-3">
          {label}
        </span>
      )}
      <textarea
        rows={rows}
        cols={rows}
        placeholder={placeholder}
        className={`border-2 border-primary font-semibold focus-within:outline-none p-2 px-5 h-14 rounded-3xl text-primary  placeholder-primary placeholder-opacity-50 ${
          fullWidth ? "w-full" : "w-64"
        } ${className}`}
      />
    </div>
  );
};

export default TextArea;
